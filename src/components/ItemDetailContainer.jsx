import { useEffect, useState } from "react";
import { itemDataBase } from '../data/itemDataBase';
import { customFetch } from "../utils/customFetch";
import ItemDetail from "./ItemDetail";


export const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect(() => {
        customFetch(2000, itemDataBase[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    })

    return (
        <ItemDetail item={dato} />
    );
}