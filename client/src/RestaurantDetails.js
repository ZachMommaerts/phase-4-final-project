import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RenderItem from './RenderItem';

export default function RestaurantDetails({ order, setOrder }) {
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
                item={item}
                order={order}
                setOrder={setOrder}
            />
        )
    })

    return(
        <div>
            {renderItems}
            <Link to={`/order`}>
                <button>Review Order</button>
            </Link>
        </div>
    )
}