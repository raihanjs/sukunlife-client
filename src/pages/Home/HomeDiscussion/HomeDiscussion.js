import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DiscussionCard from './DiscussionCard/DiscussionCard';

const HomeDiscussion = () => {
    const [discussions, setDiscussions] = useState([])

    useEffect(() => {
        fetch('discussion.json')
            .then(res => res.json())
            .then(data => setDiscussions(data));

    }, [discussions])
    return (
        <section className='max-w-[1200px] mx-auto my-10 md:my-20'>
            <div className='mx-5'>
                {/* Section Title */}
                <div className='flex flex-wrap justify-between mb-5'>
                    <h2 className='text-[20px] md:text-[26px] lg:text-[35px]'>আলোচনা</h2>
                    <Link className='text-ash underline text-[16px] md:text-[18px] lg:text-[22px]' to=''>ঘুরে দেখুন</Link>
                </div>
                {/* Consultant Container */}
                <div className='grid gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        discussions.map(discussion => <DiscussionCard
                            key={discussion._id}
                            discussion={discussion}
                        ></DiscussionCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeDiscussion;