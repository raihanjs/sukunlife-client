import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { img, title, desc } = blog;
    return (
        <div>
            <img src={img} className='rounded-md' alt="" />
            <div className='py-5'>
                <h5 className='text-18px md:text-[22px] lg:text-[28px] text-primary'>{title}</h5>
                <p className='text-[13px] text-ash'>
                    {
                        desc?.length > 100 ? <>{`${desc.slice(0, 100)}...`}</> : <>{desc}</>
                    }
                </p>
                <button className='pt-3 pb-2 px-8 bg-primary text-white text-[15px] mt-5 transition-all hover:shadow-xl hover:-translate-y-[2px] active:-translate-y-[1px]'><Link to='/'>আরও পড়ুন</Link></button>
            </div>
        </div>
    );
};

export default BlogCard;