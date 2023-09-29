import { Routes, Route } from "react-router-dom";
import { Energy, Home } from "../pages";
import { CreateDeviceModal } from "../components/page";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />} />
        {/* <Route path="/create-device" component={CreateDeviceModal} /> */}
        <Route path = "/energy" element = {<Energy />} />
      </Routes>
    </>
  );
}

export default App;
