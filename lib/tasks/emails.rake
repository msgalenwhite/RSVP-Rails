desc "Invitation summary with dietary restrictions"
task :final_summary => [ :environment ] do
  InviteSummarySetup.new.email_bride
  puts "Email sent! (check your inbox)"
end

desc "Contact all guests about rooms and brunch"
task :rooms_and_brunch => [ :environment ] do
  puts "Beginning emails!"
  AnnouncementSetup.new.send_emails
  puts "Emails sent!"
end

desc "Contact bridal party about rehearsal"
task :rehearsal => [ :environment ] do
  puts "Beginning emails!"
  WeddingPartySetup.new.send_out
  puts "Emails sent!"
end
