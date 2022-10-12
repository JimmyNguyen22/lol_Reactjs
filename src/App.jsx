import "./App.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Header } from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
