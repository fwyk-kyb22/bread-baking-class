Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users, :controllers => {
    :registrations => 'users/registrations', 
    :sessions => 'users/sessions'  
  } 
  resources :articles do
    resources :likes, only: [:create, :destroy], defaults: { format: 'js' }
  end
  resources :home, only: :index
  resources :lesson,  only: :index
  resources :meetings, except: :show do
    resources :reservations, only: [:new,:create]
  end
  namespace :api do
    resources :comments, only: :index, defaults: { format: 'json' }
  end
  resources :reservation_confirmation , only: :index
  resources :admin_reservation_confirmation , only: :index
  resources :groups, only: [:index, :show] do
    resources :comments, only:[:create, :destroy] do
      collection do
        delete 'destroy_all'
      end
    end
  end
  resources :admin, only: :index
end