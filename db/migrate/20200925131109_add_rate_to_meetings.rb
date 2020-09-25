class AddRateToMeetings < ActiveRecord::Migration[6.0]
  def change
    add_column :meetings, :rate, :float, null: false, default: 0
  end
end
