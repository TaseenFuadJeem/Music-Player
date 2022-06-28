
import React from 'react';
import { ImMusic } from 'react-icons/im';
import { RiPlayListAddFill } from 'react-icons/ri';

const Songs = ({ playlist }) => {
    console.log(playlist)

    const allSongs = [
        'The Weeknd - Starboy ft.Daft Punk (Official Audio)',
        'The Weeknd - Out of Time(Official Audio) ',
        'The Weeknd - Call Out My Name (Official Audio)',
        'The Weeknd - Die For You(Official Audio)',
        'The Weeknd - Save Your Tears (Official Audio)',
        'The Weeknd & Ariana Grande – Save Your Tears (Official Audio)',
    ]

    return (
        <section className='mb-6'>
            {
                allSongs.map(song =>
                    <div className='bg-white rounded-lg p-5 flex items-center mb-3 relative'>
                        <ImMusic className='mr-3 text-lg' /> <p className='font-semibold'>{song}</p> <label for="my-modal-3" className='ml-auto'><RiPlayListAddFill className='text-xl cursor-pointer' /></label>
                    </div>
                )
            }




            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-2xl font-bold'>Your playlists</h1>
                    {
                        playlist.map(p => <div className='p-3 border border-black rounded-lg my-3'><p className='text-center'>{p.name}</p></div>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Songs;