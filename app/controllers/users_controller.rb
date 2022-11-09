class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create!(user_params)
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :nick_name, :phone_number, :email)
    end
end