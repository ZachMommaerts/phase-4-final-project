import { useState, useEffect } from 'react';
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
            <RestaurantInfo 
                key = {restaurant.id}
                name = {restaurant.name}
            />
        )
    })

    return(
        <div>
            {restaurantList}
        </div>
    )
}