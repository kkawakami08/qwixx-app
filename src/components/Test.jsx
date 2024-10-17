import React, { useState } from "react";
import DiceAnimation from "./DiceAnimation";
import lottieAnimation from "../../diceAnimation.json";

const Test = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation state after a short delay (adjust duration as needed)
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // Change to the duration of your animation
  };

  return (
    <div onClick={handleClick}>
      {isAnimating ? (
        <div className="relative">
          <p className="absolute top-1/2 left-9 z-10 font-extrabold text-3xl">
            ROLLING!
          </p>
          <DiceAnimation
            animationData={lottieAnimation}
            className="fill-black"
          />
        </div>
      ) : (
        <div style={{ backgroundColor: "red", width: "100%", height: "100%" }}>
          {/* Your Red Die representation */}
          <h2 className="text-white">Red Die</h2>
        </div>
      )}
    </div>
  );
};

export default Test;
