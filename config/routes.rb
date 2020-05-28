Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  resources :blogs
  resources :home, only: [:index]
  resources :contacts,only: [:new, :create]
end
