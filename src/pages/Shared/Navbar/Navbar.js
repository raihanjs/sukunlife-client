import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import search from '../../../assets/search.png';
import logo from '../../../assets/logo.png';
import { MdMenu } from "react-icons/md";
const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const handleMobileNav = () => setMobileNav(value => !value);

    const menuItems = <>
        {/* <li className='bg-primary py-1 px-3 rounded-md'><a href='https://sukunlife-player.web.app/'>অডিও প্লেয়ার</a></li> */}
        {/* <li className='bg-primary py-1 px-3 rounded-md'><Link to='/blog'>ব্লগ</Link></li> */}
        <li className='bg-primary py-1 px-3 rounded-md mr-0 lg:mr-3'><Link>অ্যাপয়েন্টমেন্ট</Link></li>
        <li className='bg-primary py-1 px-3 rounded-md'><Link>যোগাযোগ</Link></li>
    </>
    return (
        <>
            {/* Desktop Navbar */}
            <nav className='bg-white sticky top-0 z-40 overflow-hidden md:text-[16px] lg:text-[18px] xl:text-[20px] px-5 drop-shadow-2xl'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <img src={logo} className='w-5/12' alt=''/>
                        <ul className='hidden md:flex justify-between text-white w-2/12'>
                            {menuItems}
                        </ul>
                        {/* SearchBox */}
                        {/* <form action="" className='flex justify-between items-center'>
                            <input type="search" placeholder='অনুসন্ধান করুন' name=""
                                className='border-l-2 border-white pl-5 bg-transparent focus:outline-none max-w-[250px]' />
                            <img src={search} alt="" />
                        </form> */}
                        {/* Mobile Menu Icon */}
                        <MdMenu className='cursor-pointer block md:hidden text-2xl text-primary' onClick={handleMobileNav} />
                    </div>
                </div>
            </nav>
            {/* Mobile Nav */}
            <div
                className={`block md:hidden fixed top-0 left-0 h-screen w-9/12 bg-primary z-40 border-r-2 border-white 
                transition-all ${mobileNav ? 'left-0' : '-left-[900px]'}`}>
                <ul className='p-10 text-white text-[16px] z-50'>
                    {menuItems}
                </ul>
            </div>
        </>
    );
};

export default Navbar;