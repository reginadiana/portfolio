import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import "./location/index";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="artigos" element={<Articles />} />
    </Routes>
  </BrowserRouter>
);

export default App;
