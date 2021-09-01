import React from 'react';
import SignUp from './SignUp';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Switch, Route } from 'react-router-dom';

const Routes = ({productItems, items, cargarProductos, removerProductos, botonClean}) => {

    return(
        <div>
            <Switch>
                <Route path="/" exact>
                    <ItemListContainer productItems={productItems} cargarProductos={cargarProductos}/>
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                <Route path="/item-detail-container" exact>
                    <ItemDetailContainer 
                    items={items} 
                    cargarProductos={cargarProductos}
                    removerProductos={removerProductos}
                    botonClean={botonClean}
                    />
                </Route>
               
            </Switch>
        </div>
    )
}

export default Routes;