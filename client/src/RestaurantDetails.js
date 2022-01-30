import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderItem from './RenderItem';

export default function RestaurantDetails() {
    const [ items, setItems ] = useState([])
    const id = useParams();

    useEffect(() => {
        fetch(`/api/restaurants/${id.id}`)
        .then(r => r.json())
        .then(data => setItems(data.items))
        .catch(error => alert(error))
    }, [])

    const renderItems = items.map(item => {
        return(
            <RenderItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
            />
        )
    })

    return(
        <div>
            {renderItems}
        </div>
    )
}