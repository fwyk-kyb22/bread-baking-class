class LikesController < ApplicationController
  # before_action :set_article

  def create
    @article = Article.find(params[:article_id])
    @like = current_user.likes.create(article_id: params[:article_id])
  end

  def destroy
    @article = Article.find(params[:article_id])
    @like = Like.find_by(article_id: params[:article_id], user_id: current_user.id)
    @like.destroy
  end
  # def set_article
  #   @article = Article.find(params[:id])
  # end
end
