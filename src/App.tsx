import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FreeWorkouts from "./pages/FreeWorkouts";
import Home from "./pages/Home";

function App() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/free-workouts" element={<FreeWorkouts></FreeWorkouts>}></Route>
                </Routes>
            </main>
            <Footer/>
        </Fragment>
    );
}

export default App;
