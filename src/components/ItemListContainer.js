import React from 'react'

const ItemListContainer = ({productItems, cargarProductos}) => {
    
    return (
        <div className="item-list-container">
            {productItems.map( (productItems) => (
                <div className="card">
                    <div>
                        <img className="productos-img" src={productItems.imagenUrl} alt={productItems.titulo}/>
                    </div>
                    <div>
                        <h3 className="productos-titulo">{productItems.titulo}</h3> 
                    </div>
                    <div className="productos-precio"> $ {productItems.precio}</div>
                    <div>
                       <button className="productos-add-button" onClick={() => cargarProductos(productItems)}>Add to cart</button>
                    </div>        
                </div>    

            ))}
            
        </div>

    );
};

export default ItemListContainer;



