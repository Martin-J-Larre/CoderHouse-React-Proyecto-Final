import React from 'react';

const ItemDetailContainer = ({items, cargarProductos, removerProductos, botonClean}) => {

    // Reduce() ver parametros look up more about
    const precioTotal = items.reduce((precio,item) => precio + item.cantidad * item.precio, 0 );

    return (
        <div className="item-detail-container">
            <div className="item-detail-header">Detalles de los Items</div>
            <div className="boton-clean-container">
                {items.length  >= 1 && (
                    <button className="boton-clean" onClick={botonClean}> Terminar mi compra </button>
                )}
            </div>

            {items.length === 0 && (
            <div className="detail-items-empty"> No items have been added </div>
            )}

            <div>
             {items.map((item) => (
                 <div key={item.id} className="items-list">
                     <img className="items-list-img" src={item.imagenUrl} alt={item.titulo}/>
                     <div className="item-detail-name">{item.titulo}</div>
                     {/* llevarlo al itemCount */}
                     <div className="item-detail-function">
                         <button className="item-boton-add" onClick={()=> cargarProductos(item)}>+</button>
                         <button 
                         className="item-boton-remove"
                         onClick={() => removerProductos(item)}
                         >-</button>
                     </div>
                     <div className="item-detail-precio">
                         {item.cantidad} * {item.precio}
                     </div>
                  </div>
                 ))}
            </div>
                 <div className="item-detail-total-titulo">
                     Total{/* Hacer un card para el total */}
                     <div className="item-detail-total-precio">$ {precioTotal} </div>
                </div>
            </div>
        );
};

export default ItemDetailContainer
