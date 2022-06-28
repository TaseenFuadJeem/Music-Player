import React from 'react';
import { ImMusic } from 'react-icons/im';
import { RiPlayListAddFill } from 'react-icons/ri';

const Songs = () => {

    const allSongs = [
        'The Weeknd - Starboy ft.Daft Punk(Official Audio)',
        'The Weeknd - Starboy ft.Daft Punk(Official Audio)',
        'The Weeknd - Starboy ft.Daft Punk(Official Audio)',
        'The Weeknd - Starboy ft.Daft Punk(Official Audio)',
        'The Weeknd - Starboy ft.Daft Punk(Official Audio)',
        'The Weeknd - Starboy ft.Daft Punk(Official Audio)',
    ]

    return (
        <section className='mb-6'>
            {
                allSongs.map(song =>
                    <div className='bg-white rounded-lg p-5 flex items-center mb-3 relative'>
                        <ImMusic className='mr-3 text-lg' /> <p className='font-semibold'>{song}</p> <RiPlayListAddFill className='ml-auto text-xl cursor-pointer' />
                    </div>
                )
            }
        </section>
    );
};

export default Songs;