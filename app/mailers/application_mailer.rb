class ApplicationMailer < ActionMailer::Base
  default from: "Galen and Chris < #{ENV["GALEN_EMAIL"]} >"
end
