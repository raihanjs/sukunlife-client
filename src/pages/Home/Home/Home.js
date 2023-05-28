import React from 'react';
import Subscribe from '../../Shared/Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import HomeBlog from '../HomeBlog/HomeBlog';
import HomeConsultant from '../HomeConsultant/HomeConsultant';
import HomeCounter from '../HomeCounter/HomeCounter';
import HomeCourse from '../HomeCourse/HomeCourse';
import HomeDiscussion from '../HomeDiscussion/HomeDiscussion';
import HomeShop from '../HomeShop/HomeShop';
import ServicesNav from '../ServicesNav/ServicesNav';
import Introduction from '../Introduction/Introduction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ServicesNav></ServicesNav> */}
            <HomeConsultant></HomeConsultant>
            {/* <HomeCourse></HomeCourse> */}
            {/* <HomeShop></HomeShop> */}
            {/* <HomeCounter></HomeCounter> */}
            <Introduction></Introduction>
            <HomeBlog></HomeBlog>
            {/* <HomeDiscussion></HomeDiscussion> */}
            {/* <Subscribe></Subscribe> */}
        </div>
    );
};

export default Home;