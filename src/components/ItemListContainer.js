import React, {useState} from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { elements } from "../mock/elementsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [elem, setElem] = useState([]);

    const {areaName} = useParams();

    useEffect(() => {
        const traerElement = () => {
            return new Promise((res, rej) => {
                const elemFiltrados = elements.filter(
                    (elem) => elem.area === areaName
                );
                const elem = areaName ? elemFiltrados : elements;
                setTimeout(() => {
                    res(elem);
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
    }, [areaName]);

    console.log(elem);

    return (
        <div className='item-container'>
            <ItemList elem={elem} />
        </div>
    );
};

export default ItemListContainer;