require 'factory_bot'

FactoryBot.define do
  factory :rsvp do
    first_name 'first_name'
    last_name 'last_name'
    is_attending false
    role 'guest'

    user
    invite
  end
end
