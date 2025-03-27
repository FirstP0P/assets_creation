import API from "../components/API";
import Login from "../components/Login";
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
          <Position />
          <API />
          <Login />
        </div>
      </div>
    </>
  );
}

export default Home;
