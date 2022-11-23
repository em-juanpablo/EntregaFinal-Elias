import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {totalElems} = useContext(CartContext);

    const total = totalElems();

    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{total}</span>
        </div>
    );
};

export default CartWidget;