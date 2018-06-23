require 'factory_bot'

FactoryBot.define do
  factory :invite do
    plus_one false
    baby false
  end
end
