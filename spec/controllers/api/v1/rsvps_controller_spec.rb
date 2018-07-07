require "rails_helper"

describe Api::V1::RsvpsController, :type => :controller do
  let(:rsvp) { FactoryBot.create(:rsvp) }
  let(:has_plus_one_rsvp) { FactoryBot.create(:rsvp_with_plus_one) }
  let(:plus_one_rsvp) { FactoryBot.create(:rsvp_for_plus_one) }

  describe 'PATCH#update_all' do
    it 'updates the dietary restrictions on the applicable invite'
    it 'calls #update_rsvps method for each incoming rsvp'
    it 'calls the RsvpMailer for each present email'
    it 'calls the SummaryMailer once'
  end

  describe '#update_rsvps' do
    context 'plus one allowed' do
      it 'creates a plus one RSVP for the same invite if none is present yet'
      it 'updates the plus one RSVP attending and name if present'
    end

    it 'updates the is_attending of the correct RSVP'
  end

  # describe 'PATCH#update_all' do
  #   let(:plus_one_rsvps) {
  #     [
  #       {
  #         full_name: "Sam (Plus One)",
  #         id: 91,
  #         invite_id: 1,
  #         is_attending: false,
  #         role: "is_plus_one"},
  #       {
  #         full_name: "Leah White",
  #         id: 1,
  #         invite_id: 1,
  #         is_attending: false,
  #         role: "has_plus_one"
  #       }
  #     ]
  #   }
  #
  #   context 'plus one allowed' do
  #     before(:each) do
  #       params = allow(controller).to receive(:params).and_return(
  #         ActionController::Parameters.new(
  #           {
  #             rsvps:  plus_one_rsvps,
  #             dietary_restrictions: "None.",
  #             plusOneName: "",
  #             controller: "api/v1/rsvps",
  #             action: "update_all",
  #             invite_id: "1",
  #             format: "json",
  #             rsvp: {}
  #           }
  #         )
  #       )
  #     end
  #     it ''
  #
  #   end
  #
  #
  #   patch :update_all
  #   returned_json = JSON.parse(response.body)
  #
  #   binding.pry
  # end
end
