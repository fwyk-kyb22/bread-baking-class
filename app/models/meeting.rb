class Meeting < ApplicationRecord
  has_many :reservations , dependent: :destroy
  has_many :users, through: :reservations
  def self.today_before
    where("start_time >= ?",  Date.today)
  end
end
