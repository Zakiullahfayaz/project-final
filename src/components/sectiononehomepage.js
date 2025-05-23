import { FaHashtag } from "react-icons/fa";
const Contents = () => {
  return (
    <div className="container mx-auto py-24  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <img src="../../public/images/image_01-6.jpg" alt="First" />
        </div>
        <div className="mt-12">
          <img src="../../public/images/image_01-5.jpg" alt="Second" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
          I invite you to try our service and I personally guarantee you will
          <br />
          have a fully satisfied experience.
        </p>
        <p className="text-xl text-gray-500">ANDRO Tomas - CHAIRMAN CEO</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-gray-600">
            Exceptional Customer Service
          </p>
          <p className="text-2xl font-light text-gray-500">
            By offering exceptional service with no detail unattended, we have
            been fortunate enough to have developed into the leading provider of
            ground transportation in the area. Our goal is to make your travels
            safe, effortless and on schedule.
          </p>
          <button
            type="button"
            className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <img src="../../public/images/image_10-1.jpg" alt="Third" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="../../public/images/image_10-2.jpg" alt="Forth" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="../../public/images/image_03-2.jpg" alt="Fifth" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
