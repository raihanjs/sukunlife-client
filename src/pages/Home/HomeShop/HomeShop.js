import React, { useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ShopCard from './ShopCard/ShopCard';

const HomeShop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [products])

    const productSlider = useRef(null);

    const settings = {
        infinite: true,
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (

        <section className='relative w-full xl:w-10/12 mx-auto'>
            <div className='max-w-[1200px] mx-auto my-10 md:my-20'>
                {/* Section Title */}
                <div className='flex flex-wrap justify-between mb-5 mx-5'>
                    <h2 className='text-[20px] md:text-[26px] lg:text-[35px]'>শপ</h2>
                    <Link className='text-ash underline text-[16px] md:text-[18px] lg:text-[22px]' to=''>ঘুরে দেখুন</Link>
                </div>
                {/* Products Container */}
                <div className='mx-5'>
                    <Slider ref={productSlider} {...settings}>
                        {products.map(product => <ShopCard
                            key={product._id}
                            product={product}
                        ></ShopCard>)}
                    </Slider>
                </div>

            </div>
            <div className='absolute top-1/2 w-full flex justify-between'>
                <IoChevronBack className='text-2xl md:text-5xl text-ash cursor-pointer' onClick={() => productSlider.current.slickPrev()} />
                <IoChevronForward className='text-2xl md:text-5xl text-ash cursor-pointer' onClick={() => productSlider.current.slickNext()} />
            </div>
        </section>



    );
};

export default HomeShop;