import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ product }) => {
    const { img, name, desc, price } = product
    return (
        <div className='border border-ash text-center p-2 md:p-5 mx-auto md:mx-5 max-w-[300px] md:max-w-full'>
            <img src={img} className="h-[250px] md:h-275px lg:h-[310px] mx-auto" alt="" />
            <h4 className='text-[18px] md:text-[20px] lg:text-[26px] my-2'>{name}</h4>
            <p className='text-[13px]'>
                {
                    desc?.length > 100 ? <>{`${desc.slice(0, 100)}...`}</> : <>{desc}</>
                }
            </p>
            <p className='text-brown text-[16px] md:text-[18px] lg:text-[23px] my-2'><span>{price}</span> টাকা</p>
            <button className='py-3 w-full bg-primary text-white text-[16px] md:text-[18px] lg:text-[22px] hover:shadow-xl hover:-translate-y-[2px] active:-translate-y-[1px]'><Link to='/'>কিনুন</Link></button>
        </div>
    );
};

export default ShopCard;