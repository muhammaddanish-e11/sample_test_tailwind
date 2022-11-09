class UsersController < ApplicationController

  def index; end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.employments.build
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :nick_name, :phone_number, :email)
    end
end