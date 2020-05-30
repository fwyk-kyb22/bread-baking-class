Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  resources :articles
    namespace :admin do
      resources :articles
    end
  resources :home, only: :index
  resources :contacts, only: [:new, :create]
  resources :lesson,  only: :index
  resources :posts
  resources :schedules, only: :index
end
