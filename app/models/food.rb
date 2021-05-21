class Food < ApplicationRecord
  belongs_to :restaurant
  belongs_to :order, optional: true # optional: true (belongs_toの外部キーのnilを許可する)
  has_one :line_food #LineFoodと1:1の関係
end