import Item from './Item';


const ItemList = (props) => {
    
    return (
        <>
        {
            props.datos.map( item => 
            <Item 
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

export default ItemList;