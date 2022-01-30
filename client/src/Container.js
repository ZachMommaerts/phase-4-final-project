import { useState } from 'react';
import RestaurantList from "./RestaurantList"

export default function Container() {
    const [ search, setSearch ] = useState('')
    return(
        <>
            <h2>Restaurants nearby</h2>
            <RestaurantList />
        </>
    )
}