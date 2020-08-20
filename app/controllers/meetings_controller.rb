class MeetingsController < ApplicationController
  before_action :set_meeting, only: [:edit, :update, :destroy]
  # before_action :authenticate_user! 

  # GET /meetings
  # GET /meetings.json
  def index
    @meetings = Meeting.all
    @comment = Comment.new
    @comments = Comment.all.order('created_at DESC')
  end

  # GET /meetings/1
  # GET /meetings/1.json

  # GET /meetings/new
  def new
    @meeting = Meeting.new
    params[:day]
    params[:month]
    params[:year]
  end

  # GET /meetings/1/edit
  def edit
  end

  # POST /meetings
  # POST /meetings.json
  def create
    @meeting = Meeting.new(meeting_params)

    respond_to do |format|
      if @meeting.save
        format.html { redirect_to meetings_path, notice: '予定を追加しました〜' }
        format.json { render :index, status: :created, location: meetings_path }
      else
        format.html { render :new }
        format.json { render json: @meeting.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /meetings/1
  # PATCH/PUT /meetings/1.json
  def update
    respond_to do |format|
      if @meeting.update(meeting_params)
        format.html { redirect_to meetings_path, notice: '編集に成功しました〜' }
        format.json { render :index, status: :ok, location: meetings_path }
      else
        format.html { render :edit }
        format.json { render json: @meeting.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /meetings/1
  # DELETE /meetings/1.json
  def destroy
    @meeting.destroy
    respond_to do |format|
      format.html { redirect_to meetings_path, notice: '削除に成功しました〜' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meeting
      @meeting = Meeting.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def meeting_params
      params.require(:meeting).permit(:name, :start_time, :content, :time_required)
    end
end
