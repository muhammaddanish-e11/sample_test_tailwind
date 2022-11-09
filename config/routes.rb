Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  resources :home, only: [:index]
  resources :users
  resources :employments

  root "home#index"
end
