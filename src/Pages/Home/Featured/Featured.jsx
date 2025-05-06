import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white bg-fixed pt-8 my-20'>
            <SectionTitle
            subHeading={'Check it Out'}
            heading={'featured Item'}
            ></SectionTitle>
            <div className='md:flex justify-center bg-transparent backdrop-blur-[20px]  items-center pb-20 pt-12 px-36'>
                <div>
                    <img className='' src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'> Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae voluptatum obcaecati laudantium? Est corporis quos quo asperiores harum, veritatis autem perferendis ducimus illum voluptate exercitationem totam molestiae. Inventore, odit!</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;