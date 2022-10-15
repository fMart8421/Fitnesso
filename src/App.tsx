import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </main>
            <Footer/>
        </Fragment>
    );
}

export default App;
