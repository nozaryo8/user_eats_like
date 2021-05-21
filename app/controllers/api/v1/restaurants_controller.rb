#module Apiとすることで、名前空間を指定する
module Api
  module V1
    class RestaurantsController < ApplicationController
      def index
        restaurants = Restaurant.all

        render json: {
          restaurants: restaurants
        }, status: :ok　
        #リクエストが成功したこと、200 OKと一緒にデータを返す
      end
    end
  end
end