import React from "react";
import { useState, createContext } from "react";

const ColorContext = createContext({
  state: { color: "black", subColor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  return (
    <ColorContext.Provider
      value={{
        state: { color, subColor },
        actions: { setColor, setSubColor },
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
const ColorConsumer = ColorContext.Consumer;

export { ColorProvider, ColorConsumer };

export default ColorContext;
