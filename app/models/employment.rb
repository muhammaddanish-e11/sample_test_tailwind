class Employment < ApplicationRecord
  validates :date_started, :employer, :date_ended , presence: true
  belongs_to :user
end