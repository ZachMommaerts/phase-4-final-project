import RenderItem from "./RenderItem";
import { Link } from 'react-router-dom';

export default function Order({ order }) {

    const orderItems = order.map(item => {
        return(
            <RenderItem
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <div>
            {orderItems}
            <Link to={`/map`}>
            <button>Place order</button>
            </Link>
        </div>
    )
}