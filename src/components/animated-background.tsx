import { styled, keyframes } from '@stitches/react';

import gsap from 'gsap';
import { useEffect } from 'react';
const gradientShift = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
});

const AnimatedBackground = styled('div', {
  background: `linear-gradient(45deg, #EBFE64, #8CEA69)`,
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 15s ease infinite`,
  height: '100vh', // Adjust height as necessary
  width: '100%',
});



const MyComponent = () => {
  useEffect(() => {
    const animation = gsap.to('.animated-background', {
      // GSAP options
      // Note: You'll need to ensure that GSAP can manipulate the properties you want to animate
    });

    // Animation controls (start, pause, resume, reverse, etc.)

    return () => animation.kill();
  }, []);

  return (
    <AnimatedBackground className="animated-background">
      {/* Content goes here */}
    </AnimatedBackground>
  );
};

export default MyComponent;