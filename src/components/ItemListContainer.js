import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    return (
         <div>
             <h1>CREA TU LANDING</h1>
             <ItemCount valorInicial={0} stock={10} />
         </div>
    );
}
export default ItemListContainer;