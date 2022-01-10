import React from 'react';

import GoodsItem from './GoodsItem';

function GoodsList({goods}) {


    if (!goods.length) {
        return <h3>Nothing here</h3>
    }
    return (
        <div className='goods'>
            {goods.map(item => {
                return <GoodsItem key={item.id} {...item}/>
            })}
        </div>
    );
}

export default GoodsList;