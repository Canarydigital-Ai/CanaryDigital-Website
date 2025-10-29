import React, { useRef } from "react";
import Slider from "react-slick";
import BirdGIF from "../../assets/GIF/bird GIF.gif";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProductImage1 from "../../assets/ProductMock Image 1.png";
import ProductImage2 from "../../assets/ProductMock Image 2.png";
import ProductImage3 from "../../assets/ProductMock Image 3.png";
import ProductImage4 from "../../assets/ProductMock Image 4.png";
// import ViewAll from "../../assets/View All image.png";

const products = [
  { image: ProductImage1, title: "AI SEO Analysis Tool" },
  { image: ProductImage2, title: "Canary Vision" },
  { image: ProductImage3, title: "AI Storyboard & Script Generator" },
  { image: ProductImage4, title: "Filiminet" },
  // { image: ViewAll, title: " " },
];

const OurProductSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div
      id="our-products-section"
      className="px-4 md:px-10 lg:px-16 py-8 md:py-20 pb-16 md:pb-36 flex flex-col justify-center relative"
      style={{
        borderBottom: "1px solid transparent",
        borderImage:
          "linear-gradient(90deg, #000000 0%, #898989 50%, #000000 100%) 1",
      }}
    >
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-4 md:mb-12">
        <div className="flex items-center gap-3 md:gap-4">
          <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-light relative">
            Our Products
            <span className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-3"></span>
          </h1>
          <img
            src={BirdGIF}
            alt="bird"
            className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] object-contain -scale-x-100"
          />
        </div>

        {/* Arrow Controls — stays at top-right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-1 sm:p-2 bg-[#292828] rounded-full transition"
          >
            <MdOutlineArrowBackIosNew className="size-4 sm:size-5 text-gray-300" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-1 sm:p-2 bg-[#292828] rounded-full transition"
          >
            <MdOutlineArrowForwardIos className="size-4 sm:size-5 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Product Slider */}
      <Slider ref={sliderRef} {...settings} className="w-full relative">
        {products.map((product, i) => (
          <div key={i} className="px-2 sm:px-3">
            <div className="flex flex-col items-start text-left">
              <div className="w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover hover:scale-105 sm:hover:scale-110 lg:hover:scale-115 transition duration-500 ease-in-out"
                />
              </div>
              <p className="text-sm md:text-base lg:text-[22px] text-gray-200 mt-3">
                {product.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurProductSection;