import ItemDetail from "./ItemDetail";

const ItemDetailList = (props) => {
    
    return (
        <>
        {
            props.datos.map( item => 
            <Item 
                key = {item.id}
                title = {item.title}
                precio = {item.price}
                imagen = {item.images}
            />
            )
        }
        </>
    )
}

export default ItemDetailList;