require 'rails_helper'

describe Story, :type => :model do
  context 'validations' do
    it { should have_valid(:body).when("name") }
    it { should_not have_valid(:body).when(nil, "") }

    it { should have_valid(:submitter).when("name", "", nil) }
  end
end
