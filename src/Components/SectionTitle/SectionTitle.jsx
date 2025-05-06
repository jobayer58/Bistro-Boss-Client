import React from 'react';

const SectionTitle = ({ heading , subHeading}) => {
    return (
        <div className='md:w-3/12 text-center mx-auto my-8'>
            <p className='text-yellow-500 mb-2'>--- {subHeading} ---</p>
            <h3 className='text-4xl uppercase border-y-4 py-3 border-gray-200'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;