class AddRateToMeetings < ActiveRecord::Migration[6.0]
  def change
    add_column :meetings, :rate, :integer, null: false, default: 1
  end
end
