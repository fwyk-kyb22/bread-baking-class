class Api::CommentsController < ApplicationController
  def index
   first_comment_id = params[:id].to_i
   @comments = Comment.includes(:user).where("id > ?", first_comment_id)
  end
end
