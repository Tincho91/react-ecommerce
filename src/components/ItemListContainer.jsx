import { useEffect, useState } from 'react';
import { itemDataBase } from '../data/itemDataBase';
import { customFetch } from '../utils/customFetch';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);


    //simulacion de fetch de api
    //commponentDidMount
    useEffect(() => {
        //consulta a la BD
        customFetch(2000, itemDataBase)
        .then(response => setDatos(response))
        .catch(error => console.log(error))
    }, [])

    return(
        <Container>
            <Row>
                <ItemList datos={datos}/>
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}