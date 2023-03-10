import React from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
// import { current } from "./JS/Actions/user";
import Errors from "./Pages/Errors";
import Home from "./Pages/Home";
// import { useEffect } from "react";
import Team from "../src/Pages/Team";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch(current());
  //   }
  // }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
