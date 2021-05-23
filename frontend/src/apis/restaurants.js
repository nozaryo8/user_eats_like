import axios from 'axios';
import { restaurantsIndex } from '../urls/index'

// コンポーネントからこの関数fetchRestaurants()を叩けば、サーバーサイドのAPIを叩いて、JSON形式のデータが返ってくる
export const fetchRestaurants = () => {
  // axios.getした結果成功した場合はthen(...)にいき、失敗・例外が帰ってきた場合はcatch(...)へと入る
  // 返り値をresという名前で取得し、res.dataでレスポンスの中身だけをreturn
  return axios.get(restaurantsIndex)
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}