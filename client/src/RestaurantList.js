import { useState, useEffect } from 'react';
import RestaurantInfo from './RestaurantInfo';

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch('/api/restaurants')
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(error => alert(error))
    }, [])

    const restaurantList = restaurants.map(restaurant => {
        return(
            <RestaurantInfo />
        )
    })

    return(
        {restaurantList}
    )
}