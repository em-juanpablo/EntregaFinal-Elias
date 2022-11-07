import React, { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {collection, doc, getDoc} from "firebase/firestore";
import { database } from "../services/firebaseConfig";

const ItemDetailContainer = () => {
    const [elem, setElem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const collectionElements = collection(database, "elements");
        const reference = doc(collectionElements, id);

        getDoc(reference)
            .then((res) => {
                setElem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            });
        
    }, [id]);

    console.log(elem);

    return (
        <div className="item-container">
            <ItemDetail elem={elem} />
        </div>
    );

};

export default ItemDetailContainer;