class CreateEmployment < ActiveRecord::Migration[7.0]
  def change
    create_table :employments do |t|
      t.references :user, foreign_key: true
      t.string     :employer
      t.datetime   :date_started
      t.datetime   :date_ended
      t.timestamps
    end
  end
end
