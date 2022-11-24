import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (elem, cantidad) => {
        const element = { ...elem, cantidad };
        if (InCart(elem.id)) {
            sumarCantidad(element);
        } else {
            setCart([...cart, element]);
        }
    };

    const sumarCantidad = (elemAdded) => {
        const cartUpdated = cart.map((cartElem) => {
            if (cartElem.id === elemAdded.id) {
                const elemUpdated = {
                    ...cartElem,
                    cantidad: elemAdded.cantidad,
                };
                return elemUpdated;
            } else {
                return cartElem;
            }
        });
        setCart(cartUpdated);
    };

    const InCart = (id) => cart.some((elem) => elem.id === id);
    const deleteAll = () => setCart([]);
    const deleteOne = (id) => {
        const filteredElem = cart.filter((elem) => elem.id !== id);
        setCart(filteredElem);
    };

    const totalElems = () => {
        let acc = 0;
        const copy = [...cart];
        copy.forEach((elem) => {
            acc = acc + elem.cantidad;
        });
        return acc;
    };

    const total = () => {
        let totalPrice = 0;
        const copyy = [...cart];
        copyy.forEach((elem) => {
            totalPrice = totalPrice + (elem.price * elem.cantidad);
        })
        return totalPrice;
    };

    const elemQuantity = (id) => {
        const elem = cart.find((elem) => elem.id === id);
        return elem?.cantidad;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                totalElems,
                addToCart,
                deleteAll,
                deleteOne,
                elemQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default Provider;