class User < ApplicationRecord
  has_many :articles
  validates :username, presence: true,
                       length: {minimum: 3, maximum: 25},
                       uniqueness: {case_sensitive: false}

  validates :email, presence: true,
                    length: {maximum: 255},
                    uniqueness: {case_sensitive: false},
                    format: {with: URI::MailTo::EMAIL_REGEXP}

end