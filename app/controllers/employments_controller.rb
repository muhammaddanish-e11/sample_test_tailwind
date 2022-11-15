class EmploymentsController < ApplicationController

  def index; end

  def new; end

  def create
    if User.create(required_params)
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  private

    def required_params
      params.require(:user).permit(:first_name, :last_name, :nick_name, :phone_number, :email, employments_attributes:[:user_id, :employer])
    end
end