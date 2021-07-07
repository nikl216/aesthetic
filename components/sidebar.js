import { FiX } from "react-icons/fi";

function Sidebar({ setClick }) {
  return (
    <>
      <div
        className={`flex flex-col space-y-10 justify-center items-center m-auto h-screen w-full    
      bg-white z-50 `}
      >
        <div className="absolute top-20 right-16 menu transition duration-500">
          <FiX
            size={25}
            onClick={() => {
              setClick((click) => !click);
            }}
          />
        </div>
        <div className="text-2xl px-10 font-medium hover:text-gray-400 transition duration-500">
          Homes
        </div>
        <div className="text-2xl px-10 font-medium hover:text-gray-400 transition duration-500 ">
          About
        </div>
        <div className="text-2xl px-10 font-medium hover:text-gray-400 transition duration-500">
          Services
        </div>
        <div className="text-2xl px-10 font-medium hover:text-gray-400 transition duration-500">
          Contact
        </div>
      </div>
    </>
  );
}

export default Sidebar;
