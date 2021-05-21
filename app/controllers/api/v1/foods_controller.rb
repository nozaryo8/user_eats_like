module Api
  module V1
    class FoodsController < ApplicationController
      def index
        restaurant = Restaurant.find(params[:restaurant_id])
        foods = restaurant.foods

        render json: {
          foods: foods
        }, status: :ok
        #JSONとはJavaScriptのオブジェクト記法を元にしたデータの形
      end
    end
  end
end