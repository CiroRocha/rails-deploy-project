class User < ApplicationRecord

  # Run before saving to DB
  before_save { self.email = email.downcase }

  has_many :articles
  validates :username, presence: true,
                       length: {minimum: 3, maximum: 25},
                       uniqueness: {case_sensitive: false}

  validates :email, presence: true,
                    length: {maximum: 255},
                    uniqueness: {case_sensitive: false},
                    format: {with: URI::MailTo::EMAIL_REGEXP}

  has_secure_password

end
