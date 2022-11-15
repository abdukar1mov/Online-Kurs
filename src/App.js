import React from "react"
import { Route, Routes } from "react-router-dom";
import Courses from "./components/CourseCards/Courses";
import KursPage from "./components/KursPage/KursPage";
import ErrorPage from "./Errorpage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/OnlineKurs" element={<KursPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/:id" element={<Courses/>}/>
      </Routes>
    </div>
  );
}

export default App;
