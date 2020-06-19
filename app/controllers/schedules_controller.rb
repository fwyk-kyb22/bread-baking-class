class SchedulesController < ApplicationController
  before_action :authenticate_user! 
  def index
    @comment = Comment.new
    @comments = Comment.all.order('created_at DESC')
  end
end
