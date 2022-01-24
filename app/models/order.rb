class Order < ApplicationRecord
    has_many :users
    has_many :restaurants
end
