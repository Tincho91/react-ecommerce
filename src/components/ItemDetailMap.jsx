import ItemDetail from "./ItemDetail";

const ItemDetailMap = (props) => {
    
    return (
        <>
        {
            props.datos.map( item => 
            <ItemDetail
                key = {item.key}
                id = {item.id}
                title = {item.title}
                description = {item.description}
                price = {item.price}
                images = {item.images}
                brand = {item.brand}
                material = {item.material}
            />
            )
        }
        </>
    )
}

export default ItemDetailMap;