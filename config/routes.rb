Rails.application.routes.draw do
  root 'homes#index'
  # devise_for :users
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

  get '/wedding/invitation' => 'wedding#react'
  get '/wedding/location' => 'wedding#react'
  get '/wedding/transportation' => 'wedding#react'
  get '/wedding/weather' => 'wedding#react'
  get '/wedding/registry' => 'wedding#react'
  get '/wedding/coolsite' => 'wedding#react'
  get '/wedding/rsvp' => 'wedding#react'
  get '/wedding/schedule' => 'wedding#react'
  get '/wedding/updated_rsvp' => 'wedding#react'
  get '/stories/new' => 'wedding#react'
end
