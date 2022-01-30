import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RestaurantInfo from './RestaurantInfo';

export default function RestaurantList( {restaurants, setRestaurants }) {

    useEffect(() => {
        fetch('/api/restaurants')
        .then(r => r.json())
        .then(data => setRestaurants(data))
        .catch(error => alert(error))
    }, [])

    const restaurantList = restaurants.map(restaurant => {
        return(
            <Link to={`/restaurants/${restaurant.id}`}>
                <RestaurantInfo 
                    key = {restaurant.id}
                    name = {restaurant.name}
                />
            </Link>
        )
    })

    return(
        <div>
            {restaurantList}
        </div>
    )
}