class CreateMeetings < ActiveRecord::Migration[6.0]
  def change
    create_table :meetings do |t|
      t.string :name
      t.text :content
      t.datetime :start_time
      t.integer :time_required
      t.integer :max_reservations
      t.timestamps
    end
  end
end
