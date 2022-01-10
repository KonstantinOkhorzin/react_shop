

function BasketItem({id, name, price, quantity}) {
    return (
        <li className="collection-item ">
            {name} x{quantity} = {price} 
            <span class="secondary-content">
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>);
}

export default BasketItem;