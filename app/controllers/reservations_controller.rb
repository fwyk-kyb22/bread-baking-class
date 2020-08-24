class ReservationsController < ApplicationController
  before_action :authenticate_user!
  def new
    @meeting = Meeting.find(params[:meeting_id])
    @reservation = Reservation.new
  end
  def create
    Reservation.create(reservation_params)
  end

  private
  def reservation_params
    params.permit(:meeting_id).merge(user_id: current_user.id)
  end
end
