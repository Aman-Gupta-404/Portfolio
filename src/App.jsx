import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Anitest from "./pages/Anitest/Anitest";
import Preloader from "./Components/Preloader/Preloader";
import NavBurger from "./Components/NavBurger/NavBurger";
import Contact from "./pages/Contact/Contact";
import TransitionLoder from "./Components/TransitionLoder/TransitionLoder";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import {
  setTransitionFalse,
  setTransitionTrue,
} from "./redux/features/animationSlice";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import { useLocation } from "react-router-dom";
import Modal from "./Components/Modal/Modal";

function App() {
  let location = useLocation();
  const animationState = useSelector(
    (state) => state.animationState.transitionLoaderState
  );
  const pageTransitionDisplayValue = useSelector(
    (state) => state.animationState.pageValue
  );
  const modalDisplay = useSelector((state) => state.modalState);

  const dispatch = useDispatch();
  const [showBurger, setShowBurger] = useState(false);
  const [pageTransitionValue, setPageTransitionValue] = useState(false);

  // TODO: check this later
  const [initialLoadValue, setInitialLoadValue] = useState(true);
  const [stagnentScroll, setStagnentScroll] = useState(false);

  const changePageTransitionValue = () => {
    setPageTransitionValue(true);
    setTimeout(() => {
      setPageTransitionValue(false);
    }, 2000);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    // setScrollPosition(position);
    // console.log(position);
    if (position > 100) {
      setShowBurger(true);
      // console.log("shit be true bro");
    } else {
      setShowBurger(false);
    }
    // console.log(position);
  };

  useEffect(() => {
    const _value = location?.pathname?.slice(1);
    if (_value === "contact") {
      dispatch(setTransitionTrue("contact"));
    } else if (_value === "about") {
      dispatch(setTransitionTrue("about"));
    } else if (_value === "work") {
      dispatch(setTransitionTrue("work"));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // console.log("the animation state is: ", animationState);
    if (animationState) {
      setTimeout(() => {
        dispatch(setTransitionFalse());
      }, 1000);
    }
  }, [animationState]);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoadValue(false);
    }, 6000);
  }, []);

  // function to stop scroll behaviour when nav is open
  const stopScroll = () => {
    console.log("reached the app");
    setStagnentScroll(true);
  };

  const enableScroll = () => {
    setStagnentScroll(false);
  };

  useEffect(() => {
    if (stagnentScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [stagnentScroll]);

  return (
    <>
      {/* {true ? renderModal() : null} */}
      {modalDisplay.show ? <Modal message={modalDisplay.message} /> : null}
      <AnimatePresence>
        {pageTransitionDisplayValue ? (
          <TransitionLoder value={pageTransitionDisplayValue} />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showBurger ? (
          <NavBurger stopScroll={stopScroll} enableScroll={enableScroll} />
        ) : null}
      </AnimatePresence>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home loadValue={initialLoadValue} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
