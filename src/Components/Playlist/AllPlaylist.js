import React from 'react';

const AllPlaylist = ({ allPlaylist }) => {

    return (
        <button className='btn relative mx-3 bg-white text-black hover:text-white hover:bg-gray-500'>{allPlaylist} <span className='ml-5'>🎶</span></button>
    );
};

export default AllPlaylist;