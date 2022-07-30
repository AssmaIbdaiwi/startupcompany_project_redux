import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/login/Login";
import Sign_UP from "./components/login/Sign_Up";
import Profile from "./components/Profile";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Doctors from "./components/Doctors";
import DoctorDetails from "./components/DoctorDetails";
import News from "./components/News";
import NewsDetails from "./components/NewsDetails";
import "./App.css";
import Index from "./components/Index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from './redux/postSlice';

function App() {




  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign_UP" element={<Sign_UP />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<Index />} />
          <Route path="/News" element={<News />} />
          <Route path="/NewsDetails" element={<NewsDetails />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/DoctorDetails" element={<DoctorDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;