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
    <div style={{
      // border: "1px solid #EBFE64",
      borderRadius: "59px",
      overflow: "hidden",
      width:"276px",
      height:"550px",
      
      position: "relative",
    }}>

    
    <motion.video
      style={{
        // border: "1px solid #424242",
        borderRadius: "32px",
        translateY: "-2%",
        paddingTop: "10px",
        // position:"absolute",
        translateX: "-8%",
        // height: "fit-content",
        margin:"auto"
        
        // boxShadow: "0px 4px 4px #f5ffab",
      }}
      playsInline={true}
      ref={videoRef}
      width={"320px"}
      muted
      loop
      src={src}
      // whileHover={{ scale: 1.1 }}
      animate={controls}
    />
    </div>
  );
};
export default VideoComponent;
