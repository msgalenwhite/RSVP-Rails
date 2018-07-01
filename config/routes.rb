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

  get '/wedding/invitation' => 'wedding#invitation'
  get '/wedding/location' => 'wedding#location'
  get '/wedding/transportation' => 'wedding#transportation'
  get '/wedding/weather' => 'wedding#weather'
  get '/wedding/registry' => 'wedding#registry'
  get '/wedding/coolsite' => 'wedding#coolsite'
  get '/wedding/rsvp' => 'wedding#rsvp'
  get '/wedding/updated_rsvp' => 'wedding#updated'
end
