Rails.application.routes.draw do
  resources :articles
  root to: 'home#index'
  devise_for :users
  resources :home, only: :index
  resources :contacts, only: [:new, :create]
  resources :lesson,  only: :index
  resources :posts
  resources :schedules, only: :index
end
