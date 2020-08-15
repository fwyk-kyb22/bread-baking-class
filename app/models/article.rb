class Article < ApplicationRecord
  has_rich_text :content
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
end
