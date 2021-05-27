class Article < ApplicationRecord
  validates :title, presence: true, length: { minimum: 3, maximum: 150 }
  validates :description, presence: true, length: { minimum: 50, maximum: 600 }
end
