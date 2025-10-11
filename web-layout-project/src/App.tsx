import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
