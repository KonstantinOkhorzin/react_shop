import { useState, useEffect } from 'react';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

function Shop() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.name)
    };

    const removeFromBasket = (itemId) => {
        setOrder(order.filter((elem) => elem.id !== itemId))
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(elem => {
            if (elem.id === itemId) {
                const newQuantity = elem.quantity + 1;
                return {
                    ...elem,
                    quantity: newQuantity
                }
            } else {
                return elem
            }
        });
        setOrder(newOrder)
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map(elem => {
            if (elem.id === itemId) {
                const newQuantity = elem.quantity - 1;
                return {
                    ...elem,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return elem
            }
        });
        setOrder(newOrder)
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch('https://fortniteapi.io/v1/shop?lang=ru', {
            headers: {
                'Authorization': 'b1036bbb-be62e965-f85a8fe6-9d3c4535',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false)
            });
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
            {isBasketShow && (
                <BasketList 
                    order={order} 
                    handleBasketShow={handleBasketShow} 
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}/>)}
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
}

export default Shop;