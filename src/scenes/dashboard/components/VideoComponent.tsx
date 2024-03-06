import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VideoComponent = ({ src }) => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          videoRef.current.play();
        } else {
          setIsInView(false);
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef, controls]);

  return (
    <motion.video
      style={{
        // border: "1px solid #424242",
        borderRadius: "32px",
        paddingTop: "10px",
        paddingLeft: "5px",
        // boxShadow: "0px 4px 4px #f5ffab",
      }}
      ref={videoRef}
      width={"320px"}
      muted
      loop
      src={src}
      whileHover={{ scale: 1.1 }}
      animate={controls}
    />
  );
};
export default VideoComponent;
