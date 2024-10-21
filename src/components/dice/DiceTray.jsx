import React from "react";
import { useAtom } from "jotai";
import { rolledDiceAtom } from "../../atoms/diceAtoms";
import Die from "../Die";

const DiceTray = () => {
  const [rolledDice, setRolledDice] = useAtom(rolledDiceAtom);
  //   console.log(rolledDice);
  const diceColors = Object.keys(rolledDice);
  //   console.log(rolledDic);
  return (
    <div className="flex gap-2 bg-[#2D4654] w-fit p-5 rounded-xl">
      {diceColors.map((dieColor) => (
        <Die
          key={dieColor}
          value={rolledDice[dieColor]}
          color={dieColor.includes("white") ? "bg-white" : `bg-die-${dieColor}`}
        />
      ))}
    </div>
  );
};

export default DiceTray;
