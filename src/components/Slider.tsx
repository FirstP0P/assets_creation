import { useState } from "react";

const Slider = () => {
  const images = [
    "src/images/image1.jpeg",
    "src/images/image2.jpeg",
    "src/images/image3.jpeg",
    "src/images/image1.jpeg",
    "src/images/image2.jpeg",
    "src/images/image3.jpeg",
    "src/images/image1.jpeg",
    "src/images/image2.jpeg",
    "src/images/image3.jpeg",
    "src/images/image1.jpeg",
  ];

  const [currentPosition, setCurrentPosition] = useState(0);
  const imageWidth = 200;
  const totalImages = 10;
  const visibleImages = 5;
  const totalWidth = imageWidth * totalImages;
  const visibleWidth = imageWidth * visibleImages;

  const handleRight = () => {
    if (currentPosition > -(totalWidth - visibleWidth)) {
      setCurrentPosition((prev) => prev - visibleWidth);
    } else if (currentPosition == visibleWidth - totalWidth) {
      setCurrentPosition(0);
    }
  };

  const handleLeft = () => {
    if (currentPosition < 0) {
      setCurrentPosition((prev) => prev + visibleWidth);
    } else if (currentPosition == 0) {
      setCurrentPosition(-visibleWidth);
    }
  };

  return (
    <div className="sliderContainer relative bg-red-500 w-[1000px] h-[200px] py-[16px] overflow-hidden">
      <div
        className="imagesContainer flex h-full w-[2000px] transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${currentPosition}px)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={""} className="w-[200px] h-full" />
        ))}
      </div>
      <button>
        <span
          onClick={handleLeft}
          className="material-symbols-outlined absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 cursor-pointer hover:bg-gray-700"
        >
          chevron_left
        </span>
      </button>
      <button>
        <span
          onClick={handleRight}
          className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 cursor-pointer hover:bg-gray-700 "
        >
          chevron_right
        </span>
      </button>
    </div>
  );
};

export default Slider;
