class GroupsController < ApplicationController
  before_action :authenticate_user!
  before_action :authenticate_user!, only: [:index, :show]
  before_action :if_not_admin, only: :index
  def index
    @groups = Group.all
    @users = User.all
    add_breadcrumb '先生専用のマイページ！', :admin_index_path
    add_breadcrumb '生徒さんのチャットルーム一覧！'
  end

  def show
    @group = Group.find(params[:id])
    @comment = Comment.new
    @comments = @group.comments.order('created_at DESC')
    if current_user.admin?
      add_breadcrumb '先生専用のマイページ！', :admin_index_path
      add_breadcrumb '生徒さんのチャットルーム一覧！',:groups_path
      add_breadcrumb "#{@group.user.nickname}さんとのチャットルーム"
    else
      add_breadcrumb 'マイページ', :mypage_index_path
      add_breadcrumb 'チャットルーム' 
    end  
  end

  private
    def if_not_admin
      redirect_to root_path unless current_user.admin?
    end
end
