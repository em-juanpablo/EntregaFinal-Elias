import React, { useState } from "react";
import ItemDetail from "./ItemDetail";
import { elements } from "../mock/elementsMock";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [elem, setElem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const traerElement = () => {
            return new Promise((res, rej) => {
                const element = elements.find(
                    (elem) => elem.id === Number(id)
                );

                setTimeout (() => {
                    res(element);
                }, 2000);
            });
        };
        traerElement()
            .then((res) => {
                setElem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    },[id]);

    console.log(elem);

    return (
        <div className="item-container">
            <ItemDetail elem={elem} />
        </div>
    );

};

export default ItemDetailContainer;