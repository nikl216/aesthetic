import { FiPlay } from "react-icons/fi";

export default function Banner({ imgLeft, img, heading, subheading, button }) {
  const row1 = (
    <div className="flex items-center bg-gray-400 min-h-full h-600">
      <img className="p-40" src={img} alt="" />
    </div>
  );
  const row2 = (
    <div className="flex flex-col justify-center px-20 min-h-full h-600">
      <div className="flex flex-col justify-between">
        <div className="py-5 text-2xl font-black">{heading}</div>
        <div className="py-5 text-7xl font-sans font-light text-gray-500 flex-wrap">
          {subheading}
        </div>
        <div className="flex flex-row justify-between mt-7">
          <div
            className=" py-3 flex flex-row items-center justify-center font-medium border-2 border-gray-100 rounded 
    transition duration-500 ease-in-out hover:border-gray-500 
    "
          >
            <div className="pl-5 pr-7 text-md ">{button}</div>
            <div className="px-5">
              <FiPlay color="#7c7c7d" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="md:grid md:grid-cols-2 md:h-750 min-h-full h-600 md:min-h-">
      {imgLeft && row1}
      {row2}
      {!imgLeft && row1}
    </div>
  );
}
