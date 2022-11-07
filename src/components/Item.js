import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({elem}) => {
    return (
        <div className='card'>
            <img src={elem.img} alt={elem.name}></img>
            <div className='card-info'>
                <h2>{elem.name}</h2>
                <h3>{elem.shortName}</h3>
                <h5>${elem.terminalsNo}.-</h5>
                <h5>{elem.category}</h5>
                <h4>${elem.price}.-</h4>
                {elem.stock === 0 ? (
                    <h5>No hay stock</h5>
                ) : (
                    <Link to={`/elem/${elem.id}`}>Ver detalle</Link>
                )}
            </div>
        </div>
    );
};

export default Item;