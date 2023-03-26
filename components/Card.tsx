import { FC, SVGProps, useEffect, useState } from "react";
import styles from "../styles/Card.module.css";

interface ICard {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
}

const Card: FC<ICard> = ({ title, description, icon, index }) => {
  const isFirstInRow = index % 4 === 0;
  const isLastInRow = (index + 1) % 4 === 0;
  const isFirstColumn = index < 4;
  const isLastColumn = index % 4 === 3;
  const isTopRow = index < 7;
  const isBottomRow = index > 3;

  return (
    <div
      className={`${
        styles.card
      } bg-white text-center max-w-[300px] min-w-[300px] w-[300px] max-h-[300px] min-h-[300px] h-[300px] border relative 
      ${isFirstInRow ? "border-t-0 border-l-0" : ""} 
      ${isLastInRow ? "border-t-0 border-r-0" : ""} 
      ${isFirstColumn ? "border-l-0" : ""} 
      ${isLastColumn ? "border-r-0" : ""} 
      ${isTopRow ? "border-t-0" : ""} 
      ${isBottomRow ? "border-b-0 border-l-0" : ""}`}
    >
      <div>
        <div className="inline-flex p-10 bg-[url(../public/card/radialgradient.png)] bg-[length:170px] bg-no-repeat bg-top">
          {icon}
        </div>
        <div className="py-2 text-lg font-bold">{title}</div>
        <div className="px-8 pt-2">{description}</div>
      </div>
    </div>
  );
};

export default Card;
