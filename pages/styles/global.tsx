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

img{
  transition: transform 0.3s ease;
}

.mouse-icon {
  width: 100px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50px;
  position: relative;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid black;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.grid-container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.9fr 1.1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "TEXT PICTURE ."
    "FUNCTIONALITIES FUNCTIONALITIES ."
    ". . .";
}

.grid-TEXT { grid-area: TEXT; }

.grid-FUNCTIONALITIES { grid-area: FUNCTIONALITIES; }

.grid-PICTURE { grid-area: PICTURE; }

`;
