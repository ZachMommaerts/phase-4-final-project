Rails.application.routes.draw do
  resources :items
  resources :orders
  resources :restaurants
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
