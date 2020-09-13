class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :set_group

  # def set_group
  #   @group = Group.find_by(user_id: current_user.id)
  # end
protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname,:familyname, :firstname,:familyname_kana,:firstname_kana,:phone_number, :PIN])
    devise_parameter_sanitizer.permit(:account_update, keys: [:nickname,:familyname, :firstname,:familyname_kana,:firstname_kana,:phone_number, :PIN])
  end
end