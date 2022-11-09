class User < ApplicationRecord
  has_many :employments
  accepts_nested_attributes_for :employments
end