import { styled } from '@stitches/react';

const LevitatingBackground = styled('div', {
  // Assuming the background image is full viewport height and width
  height: '100vh',
  width: '100vw',
  position: 'fixed', // or 'absolute' depending on your layout
  top: 0,
  left: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1, // To ensure it stays in the background
});

export default LevitatingBackground;