FactoryBot.define do
  factory :article do
    title { Faker::Lorem.paragraph_by_chars(number: 10, supplemental: false) }
    description { Faker::Lorem.paragraph_by_chars(number: 50, supplemental: false) }
  end
end
