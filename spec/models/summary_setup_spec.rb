require 'rails_helper'

describe SummarySetup, :type => :model do
  let(:emails) { ['test@test.com', 'test2@test.com'] }
  let(:website_created_date) { Date::strptime('01-07-2018',"%d-%m-%Y") }
  let(:summary_object) { SummarySetup.new }

  before(:each) do
    @attending_rsvp = FactoryBot.create(:rsvp, first_name: 'attending', is_attending: true)
    @not_attending_rsvp = FactoryBot.create(:rsvp, first_name: 'not_attending', created_at: website_created_date, updated_at: Date.today)
    @has_not_responded_rsvp = FactoryBot.create(:rsvp, first_name: 'has_not_responded', created_at: website_created_date, updated_at: website_created_date)

    @response = SummarySetup.new.group_rsvps
  end

  describe '#initialize' do
    it 'creates a hash for @rsvps and an array of emails for @emails' do
      expect( summary_object.rsvps ).to be_a Hash
      expect( summary_object.emails ).to be_a Array
      expect( summary_object.emails.length ).to eq 2
    end
  end

  describe '#group_rsvps' do
    it 'returns a hash with keys for accepting, not attending, has_not_responded' do
      expect( @response ).to be_a Hash
      expect( @response.keys ).to eq(
        [:accepted, :rejected, :has_not_responded]
      )
    end
    it 'correctly sorts rsvps into the values of the return hash' do
      expect( @response[:accepted].length ).to eq 1
      expect( @response[:accepted].first.include?('attending') ).to eq true

      expect( @response[:rejected].length ).to eq 1
      expect( @response[:rejected].first.include?('not_attending') ).to eq true

      expect( @response[:has_not_responded].length ).to eq 1
      expect( @response[:has_not_responded].first.include?('has_not_responded') ).to eq true
    end
  end

  describe '#send_email' do
    it 'calls SummaryMailer for each email passed in' do
      message_delivery = instance_double(ActionMailer::MessageDelivery)
      expect( SummaryMailer ).to receive(:send_out).with(ENV['GALEN_EMAIL'], @response).and_return(message_delivery)
      expect( SummaryMailer ).to receive(:send_out).with(ENV['CHRIS_EMAIL'], @response).and_return(message_delivery)

      SummarySetup.new.send_email
    end
  end
end
