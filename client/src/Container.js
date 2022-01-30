import { useState } from 'react';
import RestaurantList from "./RestaurantList"
import SearchBar from './SearchBar';

export default function Container() {
    const [restaurants, setRestaurants] = useState([])
    const [ search, setSearch ] = useState('')
    
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(search.toLowerCase()));
    return(
        <>
            <h2>Restaurants nearby</h2>
            <RestaurantList 
                restaurants = {filteredRestaurants}
                setRestaurants = {setRestaurants}
            />
            <SearchBar 
                search = {search}
                setSearch = {setSearch}
            />
        </>
    )
}