import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amthal from "./components/Amthal";
import Header from "./components/Header";
import Gallary from "./components/Gallary";
ReactDom.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Amthal" element={<Amthal />} />
      <Route path="/Gallary" element={<Gallary />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
