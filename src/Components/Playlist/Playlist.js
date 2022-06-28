import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';

const Playlist = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [playlist, setPlaylist] = useState([]);
    console.log(playlist);

    const handlePlaylist = e => {

        e.preventDefault();
        const name = e.target.playlistName.value;
        setPlaylist([...playlist, name]);
        e.target.reset();
        handleClose();

    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: "30px"
    };

    return (
        <div>
            <div className='flex justify-center mt-5'><Button onClick={handleOpen} color='primary' variant="contained">Create Playlist</Button></div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handlePlaylist}>
                        <h1 className='text-xl font-bold mb-6'>Create new playlist</h1>
                        <input type="text" name='playlistName' placeholder="Type here" class="input input-bordered w-full" />
                        <input type="submit" className='btn btn-sm mt-6 w-full' value="Create" />
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default Playlist;