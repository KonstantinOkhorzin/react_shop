import {useState, useEffect} from 'react';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';

function Shop(props) {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

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
            <Cart quantity={order.length}/>
            {loading ? <Preloader/> : <GoodsList goods={goods}/>}
        </main>
    );
}

export default Shop;