import img2 from "../../assets/images/Image2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" bg-yellow-500 ">
      <div className="mt-10 flex lg:flex-row flex-col justify-between container mx-auto gap-10">
        <div className="p-5">
          <div className="mt-10 flex input lg:rounded-2xl input-bordered ">
            <input
              type="email"
              className="lg:w-80 w-96 p-2   "
              placeholder=" Enter Your Email "
              value=""
            />
            <button
              className="rounded-2xl flex justify-center items-center my-1 gap-5 lg:bg-orange-500 lg:text-white text-sm font-semibold px-10 text-orange-500"
              type="button"
            >
              Subscribe <FaArrowRightLong />
            </button>
          </div>
          <div className="flex flex-col-reverse lg:flex-row mt-10 justify-between items-center">
            <div className="p-5">
              <h1 className="text-3xl font-bold lg:text-start text-center ">
                pti <span className="text-orange-700">.</span>
              </h1>
              <p className="font-bold mt-3">
                Copyright@Tripp.All Right Reserved
              </p>
            </div>
            <div className="flex gap-3 ">
              <Link
                to="http://google.com"
                className=" p-3 bg-orange-500 text-white lg:bg-gray-300 lg:text-red-600 rounded-full"
                target="blank"
                type="button"
              >
                <FaGoogle />
              </Link>
              <Link
                to="http://twitter.com"
                className=" p-3 bg-orange-500 text-white lg:bg-gray-300 lg:text-red-600 rounded-full"
                target="blank"
                type="button"
              >
                <FaTwitter />
              </Link>
              <Link
                className=" p-3 bg-orange-500 text-white lg:bg-gray-300 lg:text-red-600 rounded-full"
                to="http://instagram.com"
                target="blank"
                type="button"
              >
                <CiInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img className="w-96  rounded-3xl" src={img2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
