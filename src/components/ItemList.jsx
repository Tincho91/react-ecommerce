import { Container } from 'react-bootstrap';
import Item from './Item';


const ItemList = (props) => {
    
    return (

        <div className='itemListContainer'>
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
        </div>
        
    )
}

export default ItemList;