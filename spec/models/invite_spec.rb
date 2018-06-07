require 'rails_helper'

describe Invite, :type => :model do
  context 'validations' do
    it { have_many(:rsvps) }
  end
end
