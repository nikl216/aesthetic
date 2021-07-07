import { FiMenu } from "react-icons/fi";
import { Sidebar } from "./sidebar";

export default function Navbar({ setClick }) {
  return (
    <div className="flex flex-row py-10 md:mx-20 mx-10 justify-between items-center">
      <div className="text-2xl font-black">Work.</div>
      <div className="md:flex md:flex-row md:justify-between hidden">
        <div className="text-md px-10 font-medium hover:text-gray-400 transition duration-500">
          Home
        </div>
        <div className="text-md px-10 font-medium hover:text-gray-400 transition duration-500">
          About
        </div>
        <div className="text-md px-10 font-medium hover:text-gray-400 transition duration-500">
          Services
        </div>
        <div className="text-md px-10 font-medium hover:text-gray-400 transition duration-500">
          Contact
        </div>
      </div>
      <div className="md:flex md:flex-row md:justify-between md:items-center hidden">
        <div className="text-md px-7 font-medium hover:text-gray-400 transition duration-500">
          Sign in
        </div>
        <div className="text-md px-7 font-medium border-2 border-gray-100 rounded py-1 transition duration-500 ease-in-out hover:border-gray-500 ">
          Sign Up
        </div>
      </div>
      <div className="md:hidden menu">
        <FiMenu
          size={"1.5em"}
          onClick={() => {
            setClick((click) => !click);
          }}
        />
      </div>
    </div>
  );
}
