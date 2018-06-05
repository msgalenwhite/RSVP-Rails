require 'rails_helper'

RSpec.describe Rsvp, :type => :model do
  context 'validations' do
    it { should have_valid(:first_name).when("name") }
    it { should_not have_valid(:first_name).when(nil, "") }
    it { should have_valid(:last_name).when("name") }
    it { should_not have_valid(:last_name).when(nil, "") }

    it { should have_valid(:is_attending).when(true, false) }
    it { should_not have_valid(:is_attending).when(nil, "") }
  end
end
