Rails.application.routes.draw do
  root 'pages#home'
  get 'about', to: 'pages#about'

  # resources auto creates routes for REST/CRUD to a specific model
  resources :articles
end
