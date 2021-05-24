class ApplicationController < ActionController::API
  before_action :fake_load

  def fake_load
    #1秒だけプログラムの実行を止める
    sleep(1)
  end
end
