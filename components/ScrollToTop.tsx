import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const ScrollToTopButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 100px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 24px;
  background-color: #000;
  color: #fff;
    border: 1px solid #333 !important;
//   box-shadow: 0px 3px 12px rgba(235, 254, 100, 0.4);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '0.7' : '0')};
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s;
  transition: opacity 0.3s, box-shadow 0.3s;
  z-index: 1000;
  padding-top: 5px;
  transition: 0.3s;
  &:hover {
    opacity: ${(props) => (props.isVisible ? '0.7' : '0')};
    scale: 1.1;
    // box-shadow: 0px 4px 12px rgba(235, 254, 100, 0.6);
  }

  &:focus {
    outline: none;

    // box-shadow: 0px 4px 12px rgba(235, 254, 100, 0.6);
  }

  @media screen and (max-width: 800px) {
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <ScrollToTopButton
        isVisible={isVisible}
        onClick={scrollToTop}
      >
        <MdOutlineKeyboardDoubleArrowUp color='rgba(235, 254, 100, 0.6)' />
      </ScrollToTopButton>
    </div>
  );
};

export default ScrollToTop;
