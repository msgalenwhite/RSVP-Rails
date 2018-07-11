require 'factory_bot'

FactoryBot.define do
  factory :invite do
    plus_one false
    baby false
    plus_one_created false
  end
end
