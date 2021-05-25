import axios from 'axios';
import { foodsIndex } from '../urls/index'

//引数のrestaurantIdによってURLが変わる
//fetchFoods()はAPIを叩く関数
export const fetchFoods = (restaurantId) => {
  return axios.get(foodsIndex(restaurantId))
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}