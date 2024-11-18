import React from "react";
import Donate from "./Donate";
import dog1 from "../assets/dog1.png";
import playdog from "../assets/playdog.png";
import { Link } from "react-router-dom";
import cow from "../assets/calf.png";
import cat from "../assets/cat1.png";
import mouse from "../assets/mouse.png";
import squirel from "../assets/squirel.png";
import Team from "./Team";
import Savings from "./Savings";
import Adopt from "./Adopt";
import AboutUs from "./AboutUs";
import BackgroundLines from "./ui/background-lines";
const Home = () => {
  return (
    <>
      <div className="h-screen">
        <BackgroundLines>
          <div className="" id="home">
            <div className="mt-14 md:mt-20 flex flex-col justify-center">
              <div className="text-center">
                <h1 className="text-4xl lg:text-7xl leading-normal">
                  We Live To <span>Make</span>{" "}
                  <span className=" bg-gradient-to-r from-teal-200 to-teal-600 text-transparent bg-clip-text font-bold italic">
                    "Them Live"
                  </span>
                </h1>
                <p className="text-xl mt-8 leading-normal italic">
                  Our Community is giving their best to support for the
                  existence of needy animals.
                </p>
              </div>
              <div className="md:flex md:justify-center grid grid-cols-2 content-center mt-10">
                <Link
                  className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center"
                  to="/donate"
                >
                  Donate Us
                </Link>
                <Link
                  className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center"
                  to="/form"
                >
                  Inform Us
                </Link>
                {/* <a href="/donate" className='p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center'>Donate</a>
         <a href="/form" className='p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center'>Inform Us</a> */}
                <a
                  className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center"
                  href="https://www.instagram.com/pawwpatrooll/"
                  traget="_blank"
                >
                  Instagram
                </a>
                <a
                  className="p-3 border border-white hover:bg-teal-300 hover:text-black m-2 rounded-md font-extrabold hover:scale-105 text-center"
                  href="https://chat.whatsapp.com/LehP1NoNMXC9z6mz1aXLQ4"
                  traget="_blank"
                >
                  Join Group
                </a>
              {/* <li><Link to="/Joincummunity" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white'>Join Community</Link></li> */}

              </div>
              <div className="bottom-0 flex justify-center items-end mt-6  max-w-screen overflow-hidden">
                <img
                  className="left-0 hidden md:flex h-[300px]"
                  src={cow}
                  alt="cow"
                />
                <img
                  className="hidden md:flex h-[300px] "
                  src={squirel}
                  alt="squirel" 
                />
                <img
                  className="flex lg:h-[500px] lg:w-[500px] h-[350px] md:static bottom-0 -z-10"
                  src={dog1}
                  alt="dog1"
                />
                <img
                  className="hidden md:flex h-[200px]"
                  src={mouse}
                  alt="cat"
                />
                <img
                  className="hidden md:flex h-[300px]"
                  src={playdog}
                  alt="playing dog"
                />
              </div>
              {/* <li><Link to="/Joincummunity" className='p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white'>Join Community</Link></li> */}

            </div>
          </div>
        </BackgroundLines>
      </div>
      <Team />
      <Savings />
      <Adopt />
      <AboutUs />
    </>
  );
};

export default Home;
