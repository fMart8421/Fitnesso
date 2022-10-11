import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <main>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </main>
    );
}

export default App;
