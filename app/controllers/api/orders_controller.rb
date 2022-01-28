class Api::OrdersController < ApplicationController

    def index
        render json: Order.all
    end

    def show
        render json: Order.find(params[:id])
    end

    def create
        order = Order.create!(order_params)
        render json: order
    end

    def update
        order = Order.find(params[:id])
        order.update!(order_params)
        render json: order
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end

    private

    def order_params
        params.permit(:restaurant_id, :user_id)
    end

end
