desc "Send an email with an invitation summary"
task :email => [ :environment ] do
  InviteSummarySetup.new.email_bride
  puts "Email sent! (check your inbox)"
end
