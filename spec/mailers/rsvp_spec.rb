require 'rails_helper'

describe RsvpMailer, :type => :mailer do
  let(:user_rsvp) { FactoryBot.create(:rsvp) }
  let(:dietary_restrictions) { 'Fish.' }
  let(:rsvps) { [
    FactoryBot.create(:rsvp),
    FactoryBot.create(:rsvp)
  ] }

  before (:each) do
    RsvpMailer.send_out(user_rsvp, dietary_restrictions, rsvps).deliver_now
    @test_mail = ActionMailer::Base.deliveries[0]
  end

  describe '#send_out' do
    it 'sends an email' do
      expect {     RsvpMailer.send_out(user_rsvp, dietary_restrictions, rsvps).deliver_now }.to change { ActionMailer::Base.deliveries.count }.by 1
    end
    it 'renders an email with the correct headers' do
      expect(@test_mail.subject).to eq("Thank you for RSVP-ing to Galen and Chris's Wedding")
      expect(@test_mail.to).to eq(['test@test.com'])
      expect(@test_mail.from).to eq([ENV['GALEN_EMAIL']])
    end
    it 'renders an email with the correct body' do
      expect(@test_mail.body).to match("Thank you, #{user_rsvp.full_name}, for RSVP'ing to Galen and Chris's wedding.  Here is a summary of the RSVP that you submitted:")
      expect(@test_mail.body).to match('Dietary Restrictions:')
      expect(@test_mail.body).to match("If this doesn't look correct, or if you have any other concerns, please contact Galen at #{ENV['GALEN_EMAIL']}.")
    end
  end
end
