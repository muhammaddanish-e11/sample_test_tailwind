class User < ApplicationRecord
  validates :email, :phone_number , presence: true
  validates :first_name, length: { maximum: 25 }, presence: true
  validates :last_name,  length: { maximum: 50 }, presence: true

  has_many :employments
  accepts_nested_attributes_for :employments
end