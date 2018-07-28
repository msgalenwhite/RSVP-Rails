require 'rails_helper'

describe SummaryMailer, :type => :mailer do
  let(:rsvp_info) { {
    accepted: [FactoryBot.create(:rsvp)],
    rejected: [FactoryBot.create(:rsvp)],
    has_not_responded: [FactoryBot.create(:rsvp)]
    } }

  before (:each) do
    SummaryMailer.send_out('test@test.com', rsvp_info).deliver_now
    @test_mail = ActionMailer::Base.deliveries[0]
  end

  describe '#send_out' do
    it 'sends an email' do
      expect { SummaryMailer.send_out('test@test.com', rsvp_info).deliver_now }.to change { ActionMailer::Base.deliveries.count }.by 1
    end
    it 'renders an email with the correct headers' do
      expect(@test_mail.subject).to eq("Your Summary Email")
      expect(@test_mail.to).to eq(['test@test.com'])
      expect(@test_mail.from).to eq([ENV['GALEN_EMAIL']])
    end
    it 'renders an email with the correct body' do
      expect(@test_mail.body).to match('Here is your latest update email:')
      expect(@test_mail.body).to match('Attending')
      expect(@test_mail.body).to match('Not attending')
      expect(@test_mail.body).to match('Has not responded')
    end
  end
end
