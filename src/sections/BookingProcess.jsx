import React from "react";
import Animate from "../components/Animate";
import { bookingSteps, bookingTestimonial } from "../data/data";
import { Star } from "lucide-react";

const BookingProcess = () => {
  return (
    <section id="booking-process" className="px-auto mt-44">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25">
        {/* left */}
        <div className="flex flex-col text-center md:text-left ">
          <Animate delay={0.2}>
            <p className="text-orange-500 uppercase font-medium mb-4">
              Table Reservation Process
            </p>
          </Animate>
          <Animate delay={0.2}>
            <h2 className="text-4xl md:text-5xl mb-16 ">
              Reserve yout table in Three Simple Steps
            </h2>
          </Animate>
          <Animate className="flex gap-0.5 mb-6 justify-center md:justify-start">
            {[...Array(bookingTestimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="size-4 text-orange-500 fill-orange-500"
              />
            ))}
          </Animate>
          <Animate delay={0.2}>
            <p className="text-zinc-600 max-w-xs max-md:mx-auto mb-4 ">
              "{bookingTestimonial.quote}"
            </p>
          </Animate>
          <Animate className="flex items-center justify-center md:justify-start gap-3">
            <img
              src={bookingTestimonial.authorImg}
              alt={bookingTestimonial.authorName}
              className="size-12 rounded-full object-cover"
            />
            <span className="text-lg">{bookingTestimonial.authorName}</span>
          </Animate>
        </div>

        {/* right */}
        <div className="space-y-4 text-left">
          {bookingSteps.map((step, index) => (
            <Animate
              key={index}
              y={150}
              delay={index * 0.15}
              className="flex items-start gap-9"
            >
              <span className="text-orange-500 font-medium text-lg shrink-0">
                {step.number}
              </span>
              <div className="flex flex-col">
                <h1 className="text-xl mb-5">{step.title}</h1>
                <p className="text-zinc-600">{step.description}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
