class Restaurant < ApplicationRecord
    has_many :items
    has_many :orders
    has_many :users, through: :orders
end
