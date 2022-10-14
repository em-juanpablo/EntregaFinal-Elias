import React, {useState} from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.inicial);

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
        count > props.inicial && setCount(count - 1);
    };

    return (
        <div className='container-counter'>
            <div className='btn-counter'>
                <button disabled={count === props.stock} onClick={sumar}>
                    +
                </button>
                <p>{count}</p>
                <button disabled={count === props.inicial} onClick={restar}>
                    -
                </button>
            </div>
            <button className='btn-add-project'>Agregar al proyecto</button>
        </div>
    );
};

export default ItemCount;