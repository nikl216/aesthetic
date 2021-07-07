import Navbar from "./navbar";
import Sidebar from "./sidebar.js";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function Template({ children }) {
  const [click, setClick] = useState(false);
  useEffect(() => {
    // if (click) {
    //   setTimeout(() => {
    //     document.body.style.overflow = "hidden";
    //   }, 500);
    // } else {
    //   document.body.style.overflow = "unset";
    // }
  }, [click]);
  const style = useSpring({
    opacity: click ? 1 : 0,
    top: click ? "0%" : "-100%",
    // marginTop: click ? 0 : -500,
  });
  return (
    <div>
      <animated.div className="absolute w-full" style={style}>
        <Sidebar click={click} setClick={setClick} />
      </animated.div>
      <div>
        <Navbar click={click} setClick={setClick} />
        {children}
      </div>
    </div>
  );
}

export default Template;
