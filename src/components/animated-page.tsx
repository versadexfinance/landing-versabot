import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.05,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2, // Adjusted duration for optimal effect
};

const AnimatedPage = ({ children }) => (
  // <motion.div
  //   // initial={{
  //   //   x: "95vw", // set 100vw to 95vw
  //   // }}
  //   animate="in"
  //   exit="out"
  //   variants={pageVariants}
  //   transition={pageTransition}
  // >
  <div>{children}</div>
);

export default AnimatedPage;
