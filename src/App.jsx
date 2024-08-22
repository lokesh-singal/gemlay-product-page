import { Footer } from "./components/Footer/Footer";
import { BottomHeader } from "./components/Header/BottomHeader";
import { MainHeader } from "./components/Header/MainHeader";
import { TopHeader } from "./components/Header/TopHeader";
import { Middle } from "./components/Middle/Middle";
import { ContextProvider } from "./context/Context";
import "./index.css";

function App() {
  return (
    <ContextProvider>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
      <Middle />
      <Footer />
    </ContextProvider>
  );
}

export default App;
