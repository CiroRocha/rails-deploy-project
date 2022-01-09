Rails.application.routes.draw do
  root 'pages#home'
  get 'about', to: 'pages#about'

  post 'register', to: 'users#new'
  put 'user/edit/:id', to: 'users#edit'
  get 'user/articles/:id', to: 'users#articles'
  get 'users', to: 'users#index'

  # resources auto creates routes for REST/CRUD to a specific model
  resources :articles, except: :new
end
