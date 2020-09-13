class CommentsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    @group = Group.find(params[:group_id])
    @comment = Comment.create!(comment_params)
    # respond_to do |format|
    #   format.json{ render :show }
    # end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to group_path(current_user.id), method: :get, notice: '削除しました！' 
  end

  def destroy_all
    Comment.destroy_all
    redirect_to group_path(current_user.id), method: :get, notice: '削除しました！' 
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(group_id: params[:group_id],user_id: current_user.id)
  end
end
