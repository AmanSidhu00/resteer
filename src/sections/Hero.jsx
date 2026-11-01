import { Star } from "lucide-react";
import Animate from "../components/Animate";

const Hero = () => {
  const avatars = [
    "/assets/user-1.jpeg",
    "/assets/user-2.jpeg",
    "/assets/user-3.jpeg",
    "/assets/user-4.jpeg",
  ];

  return (
    <section
      className="flex flex-col min-h-screen items-center
                         justify-center bg-[url('/assets/heroBanner.png')]
                          bg-cover bg-center bg-no-repeat px-4 pt-20"
    >
      <Animate y={-20} delay={0.2}>
        <p className="text-orange-600">WHERE FLAVOR MEETS ELEGANCE</p>
      </Animate>
      <Animate>
        <h1 className="text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5 font-urbanist text-balance">
          Crafted for Unforgettable Dining Moments
        </h1>
      </Animate>

      <Animate delay={0.2}>
        <p className="text-zinc-600 max-w-md text-center mt-3">
          Experience Carefully curated Menus, Fresh local ingredients and
          impeccable service in a space made for every celebration.
        </p>
      </Animate>

      <Animate>
        <a
          href="#booking-process"
          className="  bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 mt-8 rounded-full block transition"
        >
          Book a Table
        </a>
      </Animate>

      <Animate className="flex items-center justify-center md:justify-start mt-9">
        <div className="flex -space-x-3.5 pr-3">
          {avatars.map((src, i) => (
            <img
              src={src}
              key={i}
              alt="guest"
              className="size-10 border-2 border-slate-50 rounded-full hover:-translate-y-px transition"
            ></img>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-3.5 fill-orange-500 text-orange-500"
              />
            ))}
          </div>
          <p className="text-zinc-600">4.8/5 Rating - 10,000 reviews</p>
        </div>
      </Animate>
    </section>
  );
};

export default Hero;
