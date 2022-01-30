export default function RenderItem({ name, description, price }) {
    return(
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}