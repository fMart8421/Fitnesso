import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FreeWorkouts from "./pages/FreeWorkouts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/free-workouts" element={<FreeWorkouts></FreeWorkouts>}></Route>
                    <Route path="/shop" element={<Shop></Shop>}></Route>
                </Routes>
            </main>
            <Footer/>
        </Fragment>
    );
}

export default App;
