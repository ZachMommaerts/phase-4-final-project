Rails.application.routes.draw do

  namespace :api do 
    resources :items, only: [:index, :show]
    resources :orders
    resources :restaurants, only: [:index, :show]
    resources :users, only: [:show, :create, :update, :destroy]
  end

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
