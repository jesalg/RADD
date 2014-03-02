require 'spec_helper'

describe User do
  it "has a valid factory" do
    expect(build(:user)).to be_valid
  end

  let(:user) { create(:user) }

  describe "ActiveModel validations" do
    context "Basic validations" do
      it { should validate_presence_of :email }
      it { should validate_uniqueness_of :email }
      it { should validate_presence_of :password }
    end
  end

end