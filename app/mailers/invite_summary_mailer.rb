class InviteSummaryMailer < ApplicationMailer
  def send_out(responses)
    @responses = responses

    mail(
      to: ENV["GALEN_EMAIL"],
      subject: "Invitation Summary Email",
      template_path: 'invite_summary_mailer',
      template_name: 'send_out'
    )
  end
end
