Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  # resources :cards, only: [:index] do
  #   collection do
  #     post 'pay', to: 'cards#pay'
  #   end
  # end
  resources :articles
  resources :home, only: :index
  resources :lesson,  only: :index
  resources :schedules
  resources :comments, only: :create
end
