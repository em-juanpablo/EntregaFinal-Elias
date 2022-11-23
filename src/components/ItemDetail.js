import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({elem}) => {
    const [unidades, setUnidades] = useState(0);

    const {addToCart, elemQuantity} = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addToCart(elem, numero);
    };

    const quantity = elemQuantity(elem.id);

    return (
        <div>
            <img src={elem.img} alt="" />
            <div>
                <h2>{elem.name}</h2>
                <p>Elemento componente de la red</p>
                {unidades === 0 ? (
                    elem.stock === 0 ? (
                        <h1>No hay stock</h1>
                    ) : (
                        <ItemCount
                            prueba={prueba}
                            stock={elem.stock}
                            initial={quantity}
                        />
                    )
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;