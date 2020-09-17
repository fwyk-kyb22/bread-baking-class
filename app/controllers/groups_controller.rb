class GroupsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :show]
  before_action :if_not_admin, only: :index
  def index
    @groups = Group.all
    @users = User.all
    render :layout => 'admin'
  end

  def show
    @group = Group.find(params[:id])
    @comment = Comment.new
    @comments = @group.comments.order('created_at DESC')
    if current_user.admin?
      render :layout => 'admin'
    else
      render :layout => 'mypage'
    end  
  end

  private
    def if_not_admin
      redirect_to root_path unless current_user.admin?
    end
end
