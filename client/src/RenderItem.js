export default function RenderItem({ item, order, setOrder }) {
    const handleAddItem = () => {
        setOrder([...order, item])
    }

    return(
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={handleAddItem}>Add item</button>
        </div>
    )
}