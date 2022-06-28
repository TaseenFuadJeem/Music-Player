import React from 'react';
import { CgPlayList } from 'react-icons/cg';

const AllPlaylist = ({ allPlaylist }) => {

    return (
        <button className='btn relative mx-3 bg-white text-black hover:text-white hover:bg-gray-500'>{allPlaylist} <CgPlayList className='text-2xl ml-3 relative top-[2px]' /></button>
    );
};

export default AllPlaylist;