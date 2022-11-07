import React, {useEffect, useState} from 'react';

const ItemCount = ({stock, inicial = 1, prueba}) => {
    const [count, setCount] = useState(inicial);

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
        count > props.inicial && setCount(count - 1);
    };

    const add = () => {
        prueba(count);
    };

    useEffect(() => {
        setCount(inicial);
    }, [inicial]);

    return (
        <div className='container-counter'>
            <div className='btn-counter'>
                <button disabled={count === stock} onClick={sumar}>
                    +
                </button>
                <p>{count}</p>
                <button onClick={restar}>
                    -
                </button>
            </div>
            <button onClick={add} className='btn-add-project'>Agregar al proyecto</button>
        </div>
    );
};

export default ItemCount;