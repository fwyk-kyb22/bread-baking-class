Rails.application.routes.draw do
  get 'contacts/new'
  get 'contacts/create'
  devise_for :users
end
