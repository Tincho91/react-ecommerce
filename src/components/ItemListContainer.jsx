import { useEffect, useState } from 'react';
import { itemDataBase } from '../data/itemDataBase';
import { customFetch } from '../utils/customFetch';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


export const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { categoryId } = useParams(); 
    

    useEffect(() => {
        setIsLoading(true);
        if (categoryId) {
            customFetch(2000, itemDataBase.filter(item => item.categoryId == categoryId))
            .then(response =>  {
                setDatos(response);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
        } else {
            customFetch(2000, itemDataBase)
            .then(response =>  {
                setDatos(response);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
        }
    }, [categoryId])

    if (isLoading) {
        return(
            <Container className="loadingContainer vh-100">
                <Spinner className="loading" animation="grow" role="status" size='xl'> 
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    };

    return(
        <Container className="itemListContainer">
            <Row>
                <ItemList className="item-list" datos={datos}/>
            </Row>
        </Container>
    )
    
}