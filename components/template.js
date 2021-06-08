import Navbar from "./navbar";
import Sidebar from "./sidebar.js";

function Template({ click, setClick, children }) {
  return (
    <div>
      {!click && (
        <div>
          <Navbar click={click} setClick={setClick} />
          {children}
        </div>
      )}
      {click && <Sidebar click={click} setClick={setClick} />}
    </div>
  );
}

export default Template;
