require 'rails_helper'

describe Invite, :type => :model do
  context 'validations' do
    it { should have_valid(:plus_one).when(true, false) }
    it { should_not have_valid(:plus_one).when(nil, "") }

    it { should have_valid(:baby).when(true, false) }
    it { should_not have_valid(:baby).when(nil, "") }

    it { have_many(:rsvps) }
  end
end
