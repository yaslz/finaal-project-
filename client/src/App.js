import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Errors from "./Pages/Errors";
import Home from "./Pages/Home";
import Team from "../src/Pages/Team";
import Edit from "./Pages/Edit";
import Contact from "./Pages/Contact";
import { current } from "./JS/Actions/user";
import { useDispatch } from "react-redux";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
// import Profile from "./Pages/Profile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
