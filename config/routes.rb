Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end
  resources :articles
  resources :home, only: :index
  resources :lesson,  only: :index
  resources :schedules
  resources :comments, only: :create
end
