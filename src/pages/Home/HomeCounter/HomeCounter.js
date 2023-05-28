import React from 'react';

const HomeCounter = () => {
    return (
        <section className='bg-primary px-5 py-10'>
            <div className="max-w-[1200px] mx-auto text-white text-center md:flex justify-between">
                <div className='my-2 md:my-5 lg:my-10'>
                    <p className='text-[16px] md:text-[20px] text-xl lg:text-[26px]'>লরেম ইপ্সাম ডলর সিট</p>
                    <h5 className='text-[30px] md:text-[45px] lg:text-[60px]'>৫০০+</h5>
                </div>
                <div className='my-2 md:my-5 lg:my-10'>
                    <p className='text-[16px] md:text-[20px] text-xl lg:text-[26px]'>লরেম ইপ্সাম ডলর সিট</p>
                    <h5 className='text-[30px] md:text-[45px] lg:text-[60px]'>২০০+</h5>
                </div>
                <div className='my-2 md:my-5 lg:my-10'>
                    <p className='text-[16px] md:text-[20px] text-xl lg:text-[26px]'>লরেম ইপ্সাম ডলর সিট</p>
                    <h5 className='text-[30px] md:text-[45px] lg:text-[60px]'>৫০+</h5>
                </div>
            </div>
        </section>
    );
};

export default HomeCounter;