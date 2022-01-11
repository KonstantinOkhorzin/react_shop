

function BasketItem({id, name, price, quantity, removeFromBasket, incQuantity, decQuantity}) {
    return (
        <li className="collection-item ">
            {name} <i onClick={() => decQuantity(id)} className="material-icons basket-quantity">remove</i> x{quantity} <i onClick={() => incQuantity(id)} className="material-icons basket-quantity">add</i> = {price*quantity} 
            <span class="secondary-content" onClick={() => removeFromBasket(id)}>
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>);
}

export default BasketItem; 