import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useForm } from "react-hook-form";

import cake from "../assets/images/Cake.jpg";
import burger from "../assets/images/burger.jpg";
import Cappuchino from "../assets/images/Cappuchino.jpg";
import ChickenFry from "../assets/images/ChickenFry.jpg";
import FriedRice from "../assets/images/FriedRice.jpg";
import GarlicBread from "../assets/images/GarlicBread.jpg";
import Pasta from "../assets/images/Pasta.jpg";
import Pizza from "../assets/images/Pizza.jpg";

const ProductsCard = ({ title }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // post data to server
    await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // after post data form should be reset

    reset();
  };

  return (
    <div className="my-10 container mx-auto">
      <div className="flex justify-between">
        <h1 className=" lg:font-semibold font-bold my-5 lg:ml-0 ml-10 lg:text-3xl">
          {title}
        </h1>
        <button
          className="flex items-center gap-2"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          AddMore
          <div className="flex items-center justify-center">
            <MdKeyboardArrowLeft /> <MdKeyboardArrowRight />
          </div>
        </button>

        <dialog id="my_modal_4" className="modal ">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-center my-10 text-lg">
              Add Products
            </h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Products Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.name && (
                    <p className="text-red-700">Name is required.</p>
                  )}
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    {...register("number", {
                      required: true,
                    })}
                    type="number"
                    placeholder="Products Price"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.number && (
                    <p className="text-red-700">Price is required.</p>
                  )}
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">ImageUrl</span>
                  </div>
                  <input
                    {...register("imageUrl", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Products ImageUrl"
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.imageUrl && (
                    <p className="text-red-700">Url is required.</p>
                  )}
                </label>
                <label className="form-control  w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">IsPopular</span>
                  </div>
                  <input
                    {...register("isPopular")}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">IsRecommended</span>
                  </div>
                  <input
                    {...register("isRecommended")}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                </label>
                <div className="mt-5">
                  <button className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500">
                    <span className=" font-bold ml-8 transform group-hover:translate-x-10 transition-all duration-300">
                      Add Item
                    </span>
                    <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                      <svg
                        className="svg w-8 t"
                        fill="none"
                        height={24}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1={12} x2={12} y1={5} y2={19} />
                        <line x1={5} x2={19} y1={12} y2={12} />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
                  <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">
                    Close
                  </span>
                  <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full" />
                  <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full" />
                  <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full" />
                  <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full" />
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        {/* here we face same  HTTPS ERROR So we add data manually */}

        {/* {products?.map((item) => (
          <SwiperSlide key={item.Id}>
            <img
              className="rounded-2xl w-80 lg:h-96 h-44"
              src={item.ImageUrl}
              alt="slide1"
            />
            <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
              {item.Name}
            </h3>
          </SwiperSlide>
        ))} */}

        {/* here we add data manually  */}

        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={cake}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            Cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={burger}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            burger
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={Cappuchino}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            Cappuchino
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={ChickenFry}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            ChickenFry
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={FriedRice}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            FriedRice
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={GarlicBread}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            GarlicBread
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={Pasta}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            Pasta
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl w-80 lg:h-96 h-44"
            src={Pizza}
            alt="slide1"
          />
          <h3 className="mt-2 font-bold  text-gray-500  text-center uppercase">
            Pizza
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsCard;
