class GroupsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @groups = Group.all
    @users = User.all
  end

  def show
    @group = Group.find(params[:id])
    @comment = Comment.new
    @comments = @group.comments.order('created_at DESC')
  end
end
