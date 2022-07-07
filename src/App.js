import "./App.css";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./components/ColorContext";
const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
