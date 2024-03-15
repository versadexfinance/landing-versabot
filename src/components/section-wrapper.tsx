import { motion } from "framer-motion";

function SectionWrapper({ children }) {
  const slideUpAndFadeIn = {
    hidden: {
      opacity: 0,
      y: 50, // Elements start 50 pixels down from their final position
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // Adds a "spring" effect to the movement
        duration: 0.5, // Duration of the animation
        delay: 0.2, // Delay before the animation starts
      },
    },
  };

  return (
    <motion.div
      variants={slideUpAndFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;
