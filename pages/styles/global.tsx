import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Mabry+Pro:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

@font-face {
 font-family: 'Mabry';
 src: url('/mabp.ttf') format('truetype');
}

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&display=swap');
    body {
      margin: 0; line-height: normal;
      font-family: Syne;
    }
      a:hover {
      cursor: pointer;
      color: white;
      }

      @keyframes pop {
        0% {
          transform: scale(0.8);
          opacity: 0;
        }
        0% {
          transform: scale(1.01);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      .pop-in {
        animation: pop 0.5s forwards;
      }

      /* styles/globals.css or a similar global stylesheet */
@keyframes fly {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-20px) rotate(-10deg);
    opacity: 1;
  }
}
button {
  cursor: pointer;
  transition: transform 0.3s ease, z-index 0.3s ease;
}

button:hover {
  transform: scale(1.01);
  z-index: 100;
}

.fly-in {
  animation: fly 1.5s ease-out forwards;
}
`;
