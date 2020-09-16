class MypageController < ApplicationController
  before_action :authenticate_user!,only: :index
  def index
    @group = Group.find_by(user_id: current_user.id)
    @meetings = current_user.meetings.order(start_time: "ASC")
    add_breadcrumb 'マイページ'
  end
end
