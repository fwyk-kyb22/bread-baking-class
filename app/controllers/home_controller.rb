class HomeController < ApplicationController
  layout 'home'
  def index
    @meetings = Meeting.all
  end
end
