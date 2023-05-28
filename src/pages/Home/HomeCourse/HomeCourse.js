import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const HomeCourse = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, [courses])
    return (
        <section className='max-w-[1200px] mx-auto my-10 md:my-20'>
            <div className='mx-5'>
                {/* Section Title */}
                <div className='flex flex-wrap justify-between mb-5'>
                    <h2 className='text-[20px] md:text-[26px] lg:text-[35px]'>আমাদের <span className='text-primary'>কোর্স</span></h2>
                    <Link className='text-ash underline text-[16px] md:text-[18px] lg:text-[22px]' to=''>ঘুরে দেখুন</Link>
                </div>
                {/* Course Container */}
                <div className='grid gap-5 md:gap-10 lg:gap-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        courses.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeCourse;