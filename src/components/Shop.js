import { useState, useEffect } from 'react';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';

function Shop() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

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
    };

    const removeFromBasket = (itemId) => {
        setOrder(order.filter((elem) => elem.id !== itemId))
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
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
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
            { isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}/>}
        </main>
    );
}

export default Shop;