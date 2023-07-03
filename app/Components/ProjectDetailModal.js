"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

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
};

export default function ProjectDetailModal({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <Link href={data.redirect} className="text-xs p-1 font-semibold text-white bg-customNeon flex-grow text-center cursor-pointer border-2 border-customWhite hover:text-customNeon hover:bg-customGray duration-200" target="_blank" >Live</Link>
        <Link href={data.github} className="text-xs p-1 font-semibold text-white bg-customNeon flex-grow text-center cursor-pointer border-2 border-customWhite hover:text-customNeon hover:bg-customGray duration-200" target="_blank" >Github</Link>
      <button className="btn text-xs p-1 font-semibold text-white bg-customNeon flex-grow text-center cursor-pointer border-2 border-customWhite hover:text-customNeon hover:bg-customGray duration-200" onClick={() => handleOpen()}>
        Show more
      </button>
        </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {data.title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {data.description}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {data.technology}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}