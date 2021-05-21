Rails.application.routes.draw do
  #今回はAPIモードでrails newしたのでViewが存在しないよって、画面上で呼ばれるルーティングは不要。必要なのは、APIのURLのみ
  #v1を付ける理由は開発中にバージョン変更する時にスイッチングしやすくなるから
  #namespace: hogeで名前空間を付与する。これはコントローラーをグルーピングする。作成するファイルはapp/controllers/api/v1/というディレクトリに作成する
  namespace :api do
    namespace :v1 do
      resources :restaurants do
        resources :foods, only: [:index]
      end
      resources :line_foods, only: [:index ,:create]
      put 'line_foods/replace', to: 'line_foods#replace' #getリクエストでも良い
      resources :orders, only: [:create]
    end
  end
end
