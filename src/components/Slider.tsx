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

  return (
    <div className="sliderContainer relative bg-red-500 w-[1000px] h-[128px] overflow-hidden">
      <div className="imagesContainer flex h-full w-[2000px] items-center justify-center">
        {images.map((src, index) => (
          <img key={index} src={src} alt={""} className="w-[200px] h-full" />
        ))}
      </div>
      <button>
        <span className="material-symbols-outlined absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
          chevron_left
        </span>
      </button>
      <button>
        <span className="material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
          chevron_right
        </span>
      </button>
    </div>
  );
};

export default Slider;
