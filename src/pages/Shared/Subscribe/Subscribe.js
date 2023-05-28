import React from 'react';

const Subscribe = () => {
    return (
        <section className='bg-primary px-5 py-10'>
            <div className="max-w-[1200px] mx-auto text-white lg:flex items-center justify-between">
                <div className='w-full lg:w-8/12'>
                    <h5 className='text-[22px] md:text-[28px] lg:text-[38px]'>সাবস্ক্রাইব করুন</h5>
                    <p className='text-[18px] md:text-[22px] lg:text-[28px] mb-3'>আমাদের পরবর্তী আপডেটের জন্য</p>
                </div>
                <div className='w-full lg:w-4/12'>
                    <form className='h-12 relative max-w-[350px] lg:mx-auto'>
                        <input type="search" name="" className="absolute top-0 right-0 w-full h-full px-5 focus:outline-0 focus:text-black rounded-md text-[16px] md:text-[19px] lg:text-[23px]" placeholder='আপনার ইমেইল দিন' />
                        <input type="button" className='absolute top-0 right-0 w-4/12 h-full bg-black-200 rounded-md text-[16px] md:text-[19px] lg:text-[23px]' value="সাবস্ক্রাইব" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;