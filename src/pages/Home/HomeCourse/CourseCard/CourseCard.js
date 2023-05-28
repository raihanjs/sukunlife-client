import React from 'react';

const CourseCard = ({ course }) => {
    const { img, name, desc, price } = course
    return (
        <div>
            <img src={img} className='rounded-md' alt="" />
            <div className='py-5'>
                <h5 className='text-[18px] md:text-[20px] text-primary'>{name}</h5>
                <p className='md:text-[13px] text-ash'>{desc}</p>
                <p className='text-[22px] md:text-[25px] text-brown mt-3'>{price} টাকা</p>
            </div>
        </div>
    );
};

export default CourseCard;