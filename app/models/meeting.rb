class Meeting < ApplicationRecord
  has_many :reservations , dependent: :destroy
  has_many :users, through: :reservations

  validates :rate, numericality: {
    less_than_or_equal_to: 5,
    greater_than_or_equal_to: 1
  }, presence: true
  
  def self.today_after
    where("start_time >= ?",  Date.today)
  end
  # def self.today_before
  #   where("created_at >= ?", Time.zone.now.beginning_of_day)
  # end
  # def self.tommorow_before
  #   where("created_at >= ?", Time.zone.now.tomorrow.beginning_of_day)
  # end
end
