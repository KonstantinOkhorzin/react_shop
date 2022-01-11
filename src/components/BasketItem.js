

function BasketItem({id, name, price, quantity, removeFromBasket}) {
    return (
        <li className="collection-item ">
            {name} x{quantity} = {price*quantity} 
            <span class="secondary-content" onClick={() => removeFromBasket(id)}>
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>);
}

export default BasketItem;