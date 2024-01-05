import img from "../../assets/images/Image1.png";
const Section1 = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:bg-yellow-500 rounded-3xl p-10">
        <div className="lg:text-white">
          <h1 className="font-bold text-3xl w-80">
            Deliver Food To Your Door Step l
          </h1>
          <p className="lg:text-gray-100 mt-2">
            Authentic Foodl,Quick Serve Fast Delivery
          </p>
        </div>
        <div>
          <img
            className="w-96 bg-yellow-500  rounded-3xl"
            src={img}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
