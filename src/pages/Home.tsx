import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <div className="h-[100vh] w-full bg-gray-700">
        <Navbar />
        <div className="heroSection p-[64px]">
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Home;
