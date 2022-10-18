import React, {
    Fragment,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FreeWorkouts from "./pages/FreeWorkouts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
    const windowHeight = window.innerHeight;
    const [percentage, setPercentage] = useState(1);
    const mainRef = useRef<HTMLDivElement>(null);

    const getTransformPercentage = useCallback(() => {
        const mainY = mainRef.current?.getBoundingClientRect().y;
        if (mainY && mainY >= -windowHeight / 2 && mainY < 0) {
            console.log((mainY + windowHeight / 2) / (windowHeight / 2));
            const _percentage = (mainY + windowHeight / 2) / (windowHeight / 2);
            if (_percentage > 0.93) {
                setPercentage(1);
                return;
            }
            if (_percentage < 0.07) {
                setPercentage(0);
                return;
            }
            setPercentage(_percentage);
        }
    }, [windowHeight]);
    useEffect(() => {
        window.addEventListener("scroll", getTransformPercentage);
    }, [getTransformPercentage]);
    return (
        <Fragment>
            <Navbar percentage={percentage} />
            <main ref={mainRef}>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route
                        path="/contact"
                        element={<Contact></Contact>}
                    ></Route>
                    <Route
                        path="/free-workouts"
                        element={<FreeWorkouts></FreeWorkouts>}
                    ></Route>
                    <Route path="/shop" element={<Shop></Shop>}></Route>
                </Routes>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
