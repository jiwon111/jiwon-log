import React, { useContext } from "react";
import ColorContext from "./ColorContext";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "60px",
          height: "60px",
          background: state.color,
        }}
      ></div>
      <div
        style={{
          width: "60px",
          height: "60px",
          background: state.subColor,
        }}
      ></div>
    </>
  );
};
export default ColorBox;
