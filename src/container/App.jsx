import { Routes, Route } from "react-router-dom";
import { Energy, Home } from "../pages";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/energy" element = {<Energy />} />
      </Routes>
    </>
  );
}

export default App;
