class ReservationConfirmationController < ApplicationController
  before_action :authenticate_user!,only: :index
  def index
    @meetings = current_user.meetings.order(start_time: "ASC")
    @group = Group.find_by(user_id: current_user.id)
    render :layout => 'mypage'
  end
end
