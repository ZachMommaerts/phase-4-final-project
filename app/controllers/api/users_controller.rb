class Api::UsersController < ApplicationController

    def show
        render json: User.find(params[:id])
    end

    def create
        order = User.create!(user_params)
        render json: order
    end

    def update
        order = User.find(params[:id])
        order.update!(user_params)
        render json: order
    end

    def destroy
        order = User.find(params[:id])
        order.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :address, :password_digest)
    end

end
