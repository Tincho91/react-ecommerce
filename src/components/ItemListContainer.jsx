import { useEffect, useState } from 'react';
import { itemDataBase } from '../data/itemDataBase';
import { customFetch } from '../utils/customFetch';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams(); 


    useEffect(() => {
        if (categoryId) {
            customFetch(2000, itemDataBase.filter(item => item.categoryId == categoryId))
            .then(response => setDatos(response))
            .catch(error => console.log(error))
        } else {
            customFetch(2000, itemDataBase)
            .then(response => setDatos(response))
            .catch(error => console.log(error))
        }
    }, [categoryId])

    return(
        <Container className="itemListContainer">
            <Row>
                <ItemList datos={datos}/>
            </Row>
        </Container>
    )
}