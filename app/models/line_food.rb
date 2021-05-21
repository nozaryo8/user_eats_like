class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant

  belongs_to :order, optional: true #教材上は不要

  validates :count, numericality: { greater_than: 0 }

  #scopeでは全てのLineFoodからwhereでactive: trueなもの一覧を返す
  scope :active, -> { where(active: true) } #LineFood.active　←この形で使用する

  #scopeに引数を与え、restaurant_idが特定の店舗IDではないもの一覧を返してくれます。
  scope :other_restaurant, -> (picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }

  def total_amount
    food.price * count
  end
end