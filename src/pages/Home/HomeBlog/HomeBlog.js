import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, [blogs])
    return (
        <section className='max-w-[1200px] mx-auto my-10 md:my-20'>
            <div className='mx-5'>
                {/* Section Title */}
                <div className='flex flex-wrap justify-between mb-5'>
                    <h2 className='text-[20px] md:text-[26px] lg:text-[35px]'>আমাদের ব্লগ</h2>
                    <Link className='text-ash underline text-[16px] md:text-[18px] lg:text-[22px]' to=''>ঘুরে দেখুন</Link>
                </div>
                {/* Consultant Container */}
                <div className='grid gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        blogs.map(blog => <BlogCard
                            key={blog._id}
                            blog={blog}
                        ></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;