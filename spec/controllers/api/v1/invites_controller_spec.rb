require "rails_helper"

describe Api::V1::InvitesController, :type => :controller do
  let!(:rsvp) { FactoryBot.create(:rsvp) }

  describe "POST#find" do
    context 'error should be returned' do
      it "if the password is wrong" do
        params = allow(controller).to receive(:params).and_return(
          ActionController::Parameters.new(
            {
              invite: {
                first_name: rsvp.first_name,
                last_name: rsvp.last_name,
                password: "wrong password",
                email: "test@test.com"
              },
              controller: "api/v1/invites",
              action: "find"
            }
          )
        )

        post :find
        returned_json = JSON.parse(response.body)

        expect(returned_json['error']).to eq true
        expect(returned_json['message']).to eq "Your password was incorrect."
      end

      it "if the name doesn't match an rsvp" do
        params = allow(controller).to receive(:params).and_return(
          ActionController::Parameters.new(
            {
              invite: {
                first_name: 'wrong first name',
                last_name: rsvp.last_name,
                password: ENV['WEDDING_PASSWORD'],
                email: "test@test.com"
              },
              controller: "api/v1/invites",
              action: "find"
            }
          )
        )

        post :find
        returned_json = JSON.parse(response.body)

        expect(returned_json['error']).to eq true
        expect(returned_json['message']).to include(ENV["GALEN_EMAIL"])
      end
    end

    it 'should return the correct Rsvp' do
      test_rsvp = FactoryBot.create(:rsvp)
      params = allow(controller).to receive(:params).and_return(
        ActionController::Parameters.new(
          {
            invite: {
              first_name: test_rsvp.first_name,
              last_name: test_rsvp.last_name,
              password: ENV['WEDDING_PASSWORD'],
              email: "test@test.com"
            },
            controller: "api/v1/invites",
            action: "find"
          }
        )
      )

      post :find
      returned_json = JSON.parse(response.body)

      expect(returned_json['error']).to eq nil
      expect(returned_json['full_name']).to eq(test_rsvp.full_name)
    end
  end

  describe 'GET#show' do
    let(:test_invite) { FactoryBot.create(:invite) }

    it 'returns an invite if one is found' do
      get :show, params: { id: test_invite.id }
      returned_json = JSON.parse(response.body)

      expect(returned_json['id']).to eq test_invite.id
    end

    it 'returns an error if no invite is found' do
      get :show, params: { id: test_invite.id+1 }
      returned_json = JSON.parse(response.body)

      expect(returned_json['error']).to eq true
      expect(returned_json['message']).to eq("No invite found.")
    end
  end
end
