require 'date'

desc "This task is called by the Heroku scheduler add-on"
task :send_summary_email => :environment do
  puts "Checking day of the week..."
  if Date.today.sunday? || Date.today.thursday?
    puts "Sending Summary Emails..."
    CustomJob.new.perform()
    puts "done."
  else
    puts "You will receive summaries on Sunday and Thursday."
  end
end
