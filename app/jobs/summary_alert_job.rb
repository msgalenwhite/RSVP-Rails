class SummaryAlertJob < ActiveJob::Base
  def perform
    SummaryMailer.send_out(ENV["GALEN_EMAIL"]).deliver_later
    SummaryMailer.send_out(ENV["CHRIS_EMAIL"]).deliver_later
  end
end
