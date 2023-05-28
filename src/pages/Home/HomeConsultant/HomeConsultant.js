import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultantCard from './ConsultantCard/ConsultantCard';
import { AiFillQuestionCircle } from 'react-icons/ai';


const HomeConsultant = () => {



    return (
        <section className='max-w-[1200px] mx-auto my-10 md:my-20'>
            <div className='mx-5'>
                {/* Section Title */}
                {/* <div className='flex flex-wrap justify-between mb-5'>
                    <h2 className='text-[20px] md:text-[26px] lg:text-[35px]'>আমাদের <span className='text-primary'>কনসালটেন্ট</span></h2>
                    <Link className='text-ash underline text-[16px] md:text-[18px] lg:text-[22px]' to=''>ঘুরে দেখুন</Link>
                </div> */}
                {/* Consultant Container */}
                <div className='grid gap-5 lg:gap-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {/* <div className='flex justify-center items-center'> */}
                    {/* Item */}
                    <div>
                       <h5 className='text-[22px] lg:text-[27px] text-center'><strong>রুকইয়া প্লেয়ার</strong></h5>
                    <a href='https://sukunlife-player.web.app/'>
                    <div className='rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary'>
                        {/* <div className='h-[150px] w-[150px] rounded-full overflow-hidden mt-5'></div> */}
                        <div className='p-5 text-center pt-2'>
                            <img src='https://sukunlife-player.web.app/static/media/cassete.7eeb4b4d872a70e04195.png' className='h-40 w-40' alt='player'/>
                        </div>
                    </div >
                    </a>
                       </div>
                    {/* Item */}
                    <div>
                       <h5 className='text-[22px] lg:text-[27px] text-center'><strong>সেলফ রুকইয়া</strong></h5>
                    <a href='/selfruqia'>
                    <div className='rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary'>
                        {/* <div className='h-[150px] w-[150px] rounded-full overflow-hidden mt-5'></div> */}
                        <div className='p-5 text-center pt-2'>
                            <img src='https://i.ibb.co/NWWMrC1/pngtree-flat-icon-holy-book-quran-and-islamic-dhikr-tasbih-png-image-6659309.png' className='h-40' alt='player'/>
                        </div>
                    </div >
                    </a>
                       </div>
                    {/* Item */}
                    <div>
                       <h5 className='text-[22px] lg:text-[27px] text-center'><strong>রুকইয়া জিজ্ঞাসা</strong></h5>
                    <a href='/questions'>
                    <div className='rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 pt-4 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary'>
                        {/* <div className='h-[150px] w-[150px] rounded-full overflow-hidden mt-5'></div> */}
                        <div className='p-5 text-center pt-2'>
                       <AiFillQuestionCircle className='h-40 w-40'/>
                            {/* <img src='https://i.ibb.co/hKJJ7ps/images.png' className='h-40 w-40' alt='player'/> */}
                        </div>
                    </div >
                    </a>
                       </div>
                    {/* Item */}
                </div>
            </div>
        </section>
    );
};

export default HomeConsultant;