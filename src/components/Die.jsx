import DieOne from "../assets/dice/die-face-1.svg";
import DieTwo from "../assets/dice/die-face-2.svg";
import DieThree from "../assets/dice/die-face-3.svg";
import DieFour from "../assets/dice/die-face-4.svg";
import DieFive from "../assets/dice/die-face-5.svg";
import DieSix from "../assets/dice/die-face-6.svg";

const Die = ({ value, color }) => {
  const dotColor =
    color.includes("red") || color.includes("blue")
      ? "text-custom-white"
      : "text-custom-black";

  const getDieFace = (dotColor) => {
    // const randomNum = Math.floor(Math.random() * (6 - 1) + 1);
    switch (value) {
      case 1:
        return <DieOne className={dotColor} />;
      case 2:
        return <DieTwo className={dotColor} />;
      case 3:
        return <DieThree className={dotColor} />;
      case 4:
        return <DieFour className={dotColor} />;
      case 5:
        return <DieFive className={dotColor} />;
      case 6:
        return <DieSix className={dotColor} />;
      default:
        return null;
    }
  };

  const dieFace = getDieFace(dotColor);
  console.log(color, value);

  return <div className={`${color} w-14 rounded-lg p-1`}>{dieFace}</div>;
};

export default Die;
