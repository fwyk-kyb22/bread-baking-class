class MypageController < ApplicationController
  before_action :authenticate_user!,only: :index
  layout 'mypage'
  def index
    @group = Group.find_by(user_id: current_user.id)
  end
end
