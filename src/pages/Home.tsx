import Navbar from "../components/Navbar";
import Position from "../components/Position";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <div className="h-full w-full bg-gray-700">
        <Navbar />
        <div className="heroSection p-[64px]">
          <Slider />
          <Position/>
        </div>
      </div>
    </>
  );
}

export default Home;
