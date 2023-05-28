import React from 'react';

const DiscussionCard = ({ discussion }) => {
    const { title, video } = discussion;
    return (
        <div>
            <img src={video} className='rounded-md' alt="" />
            <h5 className='text-[18px] md:text-[22px] lg:text-[28px] mt-2  md:mt-5'>{title}</h5>
        </div>
    );
};

export default DiscussionCard;