import React from "react";
import Item from "./Item";

const ItemList = ({elem}) => {
    return (
        <div>
            {elem.map((elem) => {
                return <Item elem={elem} key={elem.id} />
            })}
        </div>

    );
};

export default ItemList;