import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function App() {
  return (
    // React Router <Router>...</Router>で全体を囲む
    <Router>
      {/* ルーティング先のコンポーネントを<Switch>...</Switch>で囲む　ページ共通のヘッダーやフッターがある場合には<Switch>...</Switch>の外に出す */}
      <Switch>
        // 店舗一覧ページ
        <Route //実際に１ページへのルーティングを表すのが<Route>...</Route>
          exact //exactというpropsはデフォルトではfalseになっているのでtrueにする。PATHの完全一致の場合にのみコンポーネントをレンダリングするprops
          path="/restaurants">
          <Restaurants />
        </Route>
        // フード一覧ページ
        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          // コンポーネントにmatchというpropsを渡しながら設定したPATHに対応するリクエストがあった場合にパラメーターと一緒にコンポーネントをレンダリングする
          render={({ match }) =>
            <Foods
              match={match}
            />
          }
        />
        // 注文ページ
        <Route
          exact
          path="/orders">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;