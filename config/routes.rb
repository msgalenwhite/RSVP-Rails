Rails.application.routes.draw do
  root 'wedding#react'
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      post '/invites/find.json' => 'invites#find'
      post '/stories/new.json' => 'stories#new'
      get '/stories/index/:page_num.json' => 'stories#index'
      resources :invites, only: [:show] do
        patch 'rsvps' => 'rsvps#update_all'
      end
    end
  end

  match '*routename', to: 'wedding#react', via: :all
end
