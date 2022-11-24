import React, {useState} from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PropagateLoader } from 'react-spinners/';
import ItemList from "./ItemList";
import {collection, getDocs, query, where} from "firebase/firestore";
import {database} from "../services/firebaseConfig";

const ItemListContainer = () => {
    const [elem, setElem] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryName} = useParams();

    useEffect(() => {

        const collectionElements = collection(database, "elements");

        const reference = categoryName
            ? query(collectionElements, where("category", "==", categoryName))
            : collectionElements;

        getDocs(reference)
            .then((res) => {
                const elements = res.docs.map((elem) => {
                    return {
                        id: elem.id,
                        ...elem.data(),
                    };
                });
                setElem(elements)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div 
                style={{
                    diplayFlex: 'flex',
                    justifyContent: 'center',
                }}
            >
                <PropagateLoader/>
            </div>
        );
    }

    return (
        <div className='item-container'>
            <ItemList elem={elem} />
        </div>
    );
};

export default ItemListContainer;