require 'faker'

FactoryGirl.define do

  factory :user do |u|
    sequence(:email) { |n| "user#{n}_#{Time.now.to_i}@example.com" }
    password "password"
    password_confirmation "password"
  end

end