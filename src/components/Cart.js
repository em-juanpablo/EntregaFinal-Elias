import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, deleteAll, deleteOne} = useContext(CartContext);

    if (cart.length === 0) {
        return <h1>No existen elementos</h1>
    }

    return (
        <div className="cart-container">
            {cart.map((elem) => (
                <div className="cart-detail" key={elem.id}>
                    <img src={elem.img} alt={elem.name} width="80px" />
                    <div className="cart-detail-info">
                        <h2>{elem.name}</h2>
                        <h3>Cantidad: {elem.cantidad}</h3>
                        <h3>Precio: ${elem.price}.-</h3>
                        <h4>Subtotal: ${elem.price * elem.cantidad}.-</h4>
                    </div> 
                </div>
            ))}
            <h2>Total: $0</h2>
            <button onClick={deleteAll}>Eliminar todos los elementos</button>
            <Link
                style={{
                    border: '2px solid green',
                    padding: '4px 6px',
                    borderRadius: '8px',
                }}
                to="/checkout"
            >
                Checkout
            </Link>
        </div>
    );   
};

export default Cart;