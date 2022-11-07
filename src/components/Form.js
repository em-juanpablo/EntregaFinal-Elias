import {addDoc, collection, documentId, getDocs, query, serverTimestamp, where, writeBatch,} from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { database } from "../services/firebaseConfig";

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);

    const [orderId, setOrderId] = useState('');

    const {cart, total, deleteAll} = useContext(CartContext);

    const totalPrice = total();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const order = {
                buyer: { name, lastName },
                items: cart,
                total: totalPrice,
                date: serverTimestamp(),
            };

            const ids = cart.map((elem) => elem.id);

            const elementsReference = collection(database, 'elements');

            const elementsAddedFromFirestore = await getDocs(
                query(elementsReference, where(documentId(), 'in', ids))
            );

            const {docs} = elementsAddedFromFirestore;

            const outOfStock = [];

            const batch = writeBatch(database);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.sotck;
                
                const elemAdded = cart.find(
                    (elem) => elem.id === doc.id
                );

                const elemQuantity = elemAdded?.cantidad;

                if (stockDB >= elemQuantity) {
                    batch.update(doc.reference, {stock: stockDB - elemQuantity});
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc});
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();

                const orderRef = collection(database, 'orders');
                const orderAdded = await addDoc(orderRef, order);
                setOrderId(orderAdded.id);
                deleteAll();
            } else {
                console.log("No hay stock del elemento");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    if (orderId) {
        return (
            <h1>Gracias por su compra. El número de seguimiento es &{orderId}</h1>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingrese su nombre..."
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Ingrese su apellido..."
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                <button>{loading ? "Enviando..." : "Enviar"}</button>
            </form>
        </div>
    );
};

export default Form;