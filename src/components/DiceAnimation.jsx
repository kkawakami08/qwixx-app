import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const DiceAnimation = ({ animationData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    return () => animation.destroy(); // Cleanup animation on unmount
  }, [animationData]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default DiceAnimation;
