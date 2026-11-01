import React from "react";
import Animate from "../components/Animate";

const About = () => {
  return (
    <section id="about" className="px-auto mt-44">
      <div className="flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto ">
        {/* left side image */}
        <Animate scale={0.8} y={0}>
          <img
            src="/assets/about.png"
            alt="Dish"
            className="max-w-137 w-full h-full object-cover rounded-3xl"
          />
        </Animate>

        {/* right side content */}
        <div>
          <Animate scale={0.8} y={0} className="flex items-center gap-2">
            <img src="/assets/iconL.png" alt="iconLeft" />
            <span className="font-medium uppercase">Crafted With Passion</span>
            <img src="/assets/iconR.png" alt="iconRight" />
          </Animate>
          <Animate >
            <h2 className="mt-5 text-4xl md:text-5xl text-balance">
              Experience Dining Beyond Expectations
            </h2>
          </Animate>
           <Animate delay={0.2 } >
            <p className="mt-4.5 text-zinc-600 max-w-sm">We combine fresh local ingredients, creative recipes and
                 elegant presentation to deliver a memorable experience with every visit.
            </p>
          </Animate>
          <Animate className='mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit' >
            <img src="/assets/about.png" alt="Location Preview" 
            className=" size-15 rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col gap-2">
                <p className="font-medium">Bistro Royal, NY</p>
                <a href="#">View on Map</a>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
