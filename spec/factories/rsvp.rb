require 'factory_bot'

FactoryBot.define do
  factory :rsvp do
    first_name 'First_name'
    last_name 'Last_name'
    is_attending false
    role 'guest'

    invite
  end
end
