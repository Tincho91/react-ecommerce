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
                precio = {item.price}
                imagen = {item.images}
            />
            )
        }
        </>
    )
}

export default ItemDetailMap;