import React from 'react';
import { Link } from 'react-router-dom';

const ServicesNav = () => {
    return (
        <div className='max-w-[1200px] mx-auto my-10 md:my-20'>
            <div className='font-bornoregular text-white text-[16px] md:text-[18px] lg:text-[24px] md:flex justify-between'>
                <Link to='' className='pt-2 pb-1 px-8 bg-primary md:rounded-sm block border-b-2 md:border-b-0 hover:shadow-xl hover:-translate-y-[2px] active:-translate-y-[1px]'>অ্যাপয়েন্টমেন্ট নিন</Link>
                <Link to='' className='pt-2 pb-1 px-8 bg-primary md:rounded-sm block border-b-2 md:border-b-0 hover:shadow-xl hover:-translate-y-[2px] active:-translate-y-[1px]'>হিজামা করান</Link>
                <Link to='' className='pt-2 pb-1 px-8 bg-primary md:rounded-sm block border-b-2 md:border-b-0 hover:shadow-xl hover:-translate-y-[2px] active:-translate-y-[1px]'>কোর্স কিনুন</Link>
                <Link to='' className='pt-2 pb-1 px-8 bg-primary md:rounded-sm block border-b-2 md:border-b-0 hover:shadow-xl hover:-translate-y-[2px] active:-translate-y-[1px]'>শপে ঘুরুন</Link>
            </div>
        </div>
    );
};

export default ServicesNav;