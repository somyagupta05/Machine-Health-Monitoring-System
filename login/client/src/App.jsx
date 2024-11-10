import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home"; // Assuming you have a Home component
import "bootstrap/dist/css/bootstrap.min.css";
import Homee from "./components/Homee";
import Form from "./components/Form";
// import Log from "./Log";
import Log from "./components/log";
import Video from "./components/Video";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* <Homee /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homee />} />
          {/* <About /> */}
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Log />} />
          <Route path="/form" element={<Form />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
