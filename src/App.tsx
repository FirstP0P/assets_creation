import "./App.css";

function App() {
  return (
    <div className="h-[100vh] w-full bg-gray-600">
      <div className="Navbar h-[64px] w-full px-[16px] flex items-center justify-between bg-amber-700">
        <div className="leftSideOfNavbar flex items-center justify-between bg-purple-500">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="logoContainer h-full w-[128px] px-[16px] cursor-pointer">
              <img
                src="src/images/companyLogo.png"
                alt="Amazon"
                className="h-[100%] w-[100%]"
              />
            </div>
          </a>
          <span className="mx-[16px] hover:font-bold transition-all duration-200 w-[80px] text-center cursor-pointer">
            Delivery
          </span>
          <span className="mx-[16px] hover:font-bold transition-all duration-200 w-[60px] text-center cursor-pointer">
            Dining
          </span>
          <span className="mx-[16px] hover:font-bold transition-all duration-200 w-[110px] text-center cursor-pointer">
            Restaurants
          </span>
        </div>
        <div className=" flex items-center justify-between">
          <span className="mx-[16px] hover:font-bold transition-all duration-200 w-[80px] text-center cursor-pointer">Log in</span>
          <span className="mx-[16px] hover:font-bold transition-all duration-200 w-[80px] text-center cursor-pointer">Account</span>
        </div>
      </div>
    </div>
  );
}

export default App;
