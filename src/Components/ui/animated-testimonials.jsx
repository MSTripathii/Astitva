// AnimatedTestimonials.js
"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-full mx-auto font-sans px-4 md:px-8 lg:px-12 py-20 hello">
      <div className="text-center mb-12">
        <h1 className="lg:text-6xl text-4xl text-center lg:my-24 my-14 p-3 border-b border-white leading-normal">
          Our Precious <span className="text-4xl lg:text-6xl bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold">"Team Members"</span>
        </h1>
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="relative h-96 w-full md:w-1/2 -z-40">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom "
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4 rounded-xl shadow-xl">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-3xl font-bold text-teal-500 text-center">
              {testimonials[active].name}
            </h3>
            <p className="text-lg text-gray-300 text-center">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-xl text-gray-300 mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex justify-center items-center gap-4 pt-12">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-teal-200 hover:bg-teal-300 flex items-center justify-center"
            >
              <IconArrowLeft className="h-6 w-6 text-teal-500" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-teal-200 hover:bg-teal-300 flex items-center justify-center"
            >
              <IconArrowRight className="h-6 w-6 text-teal-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
