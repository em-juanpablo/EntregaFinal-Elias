import ItemCount from "./ItemCount";

const ItemDetail = ({elem}) => {
    return (
        <div>
            <img src={elem.img} alt="" />
            <div>
                <h2>{elem.name}</h2>
                <p>Elemento componente de la red</p>
                <ItemCount stock={10} inicial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;