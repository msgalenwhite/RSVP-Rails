Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      post '/invites/find.json' => 'invites#find'
      resources :invites, only: [:show] do
        patch 'rsvps' => 'rsvps#update_all'
      end
    end
  end
  resources :invites, only: [:show]
  resources :stories, only: [:new]
end
