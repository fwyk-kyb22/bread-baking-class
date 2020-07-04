class CommentsController < ApplicationController
  
  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.json 
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to meetings_path, method: :get
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id)
  end
end
