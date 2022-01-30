# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

Restaurant.create(name: Faker::Restaurant.name, address: '2508 E Riverside Dr, Austin, TX 78741')
Restaurant.create(name: Faker::Restaurant.name, address: '7310 E Riverside Dr, Austin, TX 78741')
Restaurant.create(name: Faker::Restaurant.name, address: '2901 Spirit of Texas Dr #100, Austin, TX 78719')
Restaurant.create(name: Faker::Restaurant.name, address: '6505 Burleson Rd, Austin, TX 78744')
Restaurant.create(name: Faker::Restaurant.name, address: '6505 Burleson Rd, Austin, TX 78744')
Restaurant.create(name: Faker::Restaurant.name, address: '4136 E 12th St, Austin, TX 78721')
Restaurant.create(name: Faker::Restaurant.name, address: '1405 E 7th St, Austin, TX 78702')
Restaurant.create(name: Faker::Restaurant.name, address: '617 Congress Ave, Austin, TX 78701')
Restaurant.create(name: Faker::Restaurant.name, address: '2115 S Lamar Blvd, Austin, TX 78704')
Restaurant.create(name: Faker::Restaurant.name, address: '4805 US-290, Sunset Valley, TX 78735')

100.times {Item.create(name: Faker::Food.dish, description: Faker::Food.description, price: Faker::Number.decimal(l_digits: 1), restaurant_id: rand(1..10) ) }