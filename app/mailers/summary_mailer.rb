class SummaryMailer < ApplicationMailer
  def send_out(email, rsvp_info)
    @accepted = rsvp_info[:accepted]
    @rejected = rsvp_info[:rejected]
    @has_not_responded = rsvp_info[:has_not_responded]

    mail(
      to: email,
      subject: "Your Summary Email",
      template_path: 'summary_mailer',
      template_name: 'send_out'
    )
  end
end
