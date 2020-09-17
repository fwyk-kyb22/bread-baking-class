class AdminController < ApplicationController
  before_action :if_not_admin, except: [:index, :show]
  layout 'admin'
  def index
    @meetings = Meeting.all.order(start_time: "ASC")
    @users = User.all
  end
  private
    def if_not_admin
      redirect_to root_path unless current_user.admin?
    end
end
