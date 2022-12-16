import { useEffect, useState } from 'react';
import { itemDataBase } from '../data/itemDataBase';
import { customFetch } from '../utils/customFetch';
import { useParams } from 'react-router-dom';
import ItemDetailMap from './ItemDetailMap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const itemId = useParams(); 
    

    useEffect(() => {
        setIsLoading(true);
        if (itemId.itemId) {
            customFetch(700, itemDataBase.filter(item => item.id == itemId.itemId))
            .then(response =>  {
                setDatos(response);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
        } else {
            customFetch(700, itemDataBase)
            .then(response =>  {
                setDatos(response);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
        }
    }, [itemId.itemId])

    if (isLoading) {
        return(
            <Container className="loadingContainer vh-100">
                <Spinner className="loading" animation="grow" role="status"> 
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    };

    return(
        <Container className="itemListContainer">
            <Row>
                <ItemDetailMap className="item-detail" datos={datos}/>
            </Row>
        </Container>
    )
    
}