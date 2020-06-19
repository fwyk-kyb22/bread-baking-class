Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  resources :articles
  resources :home, only: :index
  resources :applications, only: :index
  resources :lesson,  only: :index
  resources :schedules
end
