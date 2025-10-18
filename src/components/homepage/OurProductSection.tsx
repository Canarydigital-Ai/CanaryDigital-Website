import React from "react";
import BirdGIF from "../../assets/GIF/bird GIF.gif";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProductImage1 from "../../assets/ProductMock Image 1.png";
import ProductImage2 from "../../assets/ProductMock Image 2.png";
import ProductImage3 from "../../assets/ProductMock Image 3.png";
// import ProductImage4 from "../../assets/ProductMock Image 4.png";
// import ViewAll from "../../assets/View All image.png";

const products = [
  {
    image: ProductImage1,
    title: "AI SEO Analysis Tool",
  },
  {
    image: ProductImage2,
    title: "Canary Vision",
  },
  {
    image: ProductImage3,
    title: "AI Storyboard & Script Generator",
  },
  // {
  //   image: ProductImage4,
  //   title: "AI Storyboard & Script Generator",
  // },
  // {
  //   image: ViewAll,
  //   title: "AI Storyboard & Script Generator",
  // },
];

const OurProductSection: React.FC = () => {
  return (
    <div className="bg-black text-white px-4 md:px-10 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <h1 className="text-[18px] md:text-[22px] font-light relative">
            Our Products
            <span className="w-[6px] h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-3"></span>
          </h1>
          <img
            src={BirdGIF}
            alt="bird"
            className="w-[50px] h-[50px] object-contain -scale-x-100"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-[#1a1a1a] rounded-full transition">
            <MdOutlineArrowBackIosNew className="size-5 text-gray-300" />
          </button>
          <button className="p-2 hover:bg-[#1a1a1a] rounded-full transition">
            <MdOutlineArrowForwardIos className="size-5 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, i) => (
          <div key={i} className="flex flex-col items-start text-left h-[700px]">
            <div className="w-full  overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover r"
              />
            </div>
            <p className="text-sm md:text-base lg:text-[22px] text-gray-200 mt-3">
              {product.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProductSection;
