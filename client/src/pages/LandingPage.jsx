import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import animationData from "../assets/Animation - 1734272457033.json";
import image from "../../public/bg_job1.webp";

const LandingPage = () => {
  return (
    <>
      <div className="relative bg-gray-100 min-h-screen flex items-center justify-center">
        {/* Hero Content Container */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-12 xl:gap-16 mt-6">
          {/* Text Content */}
          <div className="relative lg:w-1/2 xl:w-5/12 mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
            <div className="p-8 bg-white/90 rounded-lg shadow-lg backdrop-blur-lg">
              <h1 className="text-4xl xl:text-5xl font-extrabold text-gray-800 leading-tight">
                AspirePro Job Search
              </h1>
              <p className="mt-4 xl:mt-6 text-gray-600 text-lg xl:text-xl">
                AspirePro is a modern and intuitive job search platform designed
                to connect ambitious professionals with their dream
                opportunities. The name combines "Aspire," symbolizing ambition
                and growth, with "Pro," reflecting professionalism and
                expertise.
              </p>
              <div className="mt-10 xl:mt-8">
                <Link
                  to="/register"
                  className="inline-block bg-indigo-600 text-white px-6 py-3 xl:px-8 xl:py-4 rounded-lg font-medium shadow hover:bg-indigo-700 transition duration-300"
                >
                  Register Now
                </Link>
                <Lottie className="hidden lg:flex"
                  loop
                  animationData={animationData}
                  play
                  style={{
                    width: "40%",
                    height: "40%",
                    position: "absolute",
                    top: 200,
                    right: 20,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="relative w-full lg:w-1/2 xl:w-7/12">
            <img
              src={image}
              alt="Job search"
              className="h-[500px] xl:h-[600px] w-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="flex-col justify-center text-center mt-4">
        
          <h1 className="underline lg:text-2xl font-bold text-blue-600">
            MISSION
          </h1>
          <p className="mt-3 lg:text-xl">
            "Empowering aspirations, connecting talent with opportunity—your
            journey to success starts here."
          </p>
        
        
          <h1 className="underline lg:text-2xl font-bold text-blue-600 mt-9">
            VISION
          </h1>
          <p className="mt-3 lg:text-xl">
            "To revolutionize job searching by creating a seamless, innovative
            platform that bridges the gap between passionate professionals and
            forward-thinking employers, fostering growth, inclusivity, and
            success for all."
          </p>
        
      </div>
    </>
  );
};

export default LandingPage;
