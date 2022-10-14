import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({elem}) => {
    return (
        <div>
            <img src={elem.img} alt={elem.name}></img>
            <div>
                <h2>{elem.name}</h2>
                <h3>{elem.shortname}</h3>
                <h5>${elem.terminalsNo}.-</h5>
                <h5>{elem.category}</h5>
                <h5>{elem.area}</h5>
                <h4>${elem.price}.-</h4>
                <Link to={`/elem/${elem.id}`}>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;