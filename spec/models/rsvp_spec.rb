require 'rails_helper'

describe Rsvp, :type => :model do
  context 'validations' do
    it { should have_valid(:first_name).when("name") }
    it { should_not have_valid(:first_name).when(nil, "") }
    it { should have_valid(:last_name).when("name") }
    it { should_not have_valid(:last_name).when(nil, "") }

    it { should have_valid(:is_attending).when(true, false) }
    it { should_not have_valid(:is_attending).when(nil, "") }

    it { should have_valid(:plus_one).when(true, false) }
    it { should_not have_valid(:plus_one).when(nil, "") }

    it { should have_valid(:baby).when(true, false) }
    it { should_not have_valid(:baby).when(nil, "") }
  end

  context 'associations' do
    it { belong_to(:invite) }
    it { belong_to(:user) }
  end
end
