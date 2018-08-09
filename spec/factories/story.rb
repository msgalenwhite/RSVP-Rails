require 'factory_bot'

FactoryBot.define do
  factory :story do
    body "This is a story."
    includes_bride false
    includes_groom false
  end
end
