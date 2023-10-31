import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "@/styles/globals.css";
import Alternative from "./Alternative";
import Home from "./Home";

const ROOT_ELEMENT = document.getElementById("root");
const ROOT = ReactDOM.createRoot(ROOT_ELEMENT);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alternative" element={<Alternative />} />
      </Routes>
    </HashRouter>
  );
}

ROOT.render(<App />);
