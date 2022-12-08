import Item from './Item';


const ItemList = (props) => {
    
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

export default ItemList;