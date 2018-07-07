require 'factory_bot'

FactoryBot.define do
  factory :rsvp do
    first_name 'First_name'
    last_name 'Last_name'
    is_attending false
    role 'guest'
    email 'test@test.com'

    invite
  end
  # factory :attending_rsvp, parent: :rsvp do
  #   sequence(:first_name) {|n| "First Name#{n}"}
  #   last_name 'Last_name'
  #   is_attending true
  #   role 'guest'
  #
  #   invite
  # end

    # factory :rsvp_with_plus_one, parent: :rsvp do
    #   role 'has_plus_one'
    # end
    #
    # factory :rsvp_for_plus_one, parent: :rsvp do
    #   last_name '(Plus One)'
    #   role 'is_plus_one'
    # end
    #
    # factory :rsvp_with_email, parent: :rsvp do
    #   email 'user_email@test.com'
    # end
    #
    # factory :attending_rsvp, parent: :rsvp do
    #   is_attending true
    # end
end
