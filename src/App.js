import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import SignIn from "./components/SignIn/SignIn";
import Destination from "./views/Destination";

import Home from "./views/Home";
import Services from "./views/Services/Services";
import Booking from "./views/Booking";
import History from "./views/History";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services/:id" element={<Destination />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
