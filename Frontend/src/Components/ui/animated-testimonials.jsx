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
    <div className="max-w-full mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="lg:text-6xl text-4xl text-center lg:my-24 my-14 p-3 border-b border-white leading-normal">
          Our Precious <span className="text-4xl lg:text-6xl bg-gradient-to-l from-teal-200 to-teal-500 text-transparent bg-clip-text font-bold">"Team Members"</span>
        </h1>
      </div>

      {/* Testimonial Section */}
      <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-8">
        {/* Testimonial Image */}
        <div className="col-span-1 flex justify-center items-center">
          <div className="relative h-96 w-full md:w-1/2">
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
                  className="absolute inset-0 origin-bottom"
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

        {/* Testimonial Details */}
        <div className="col-span-1 flex flex-col justify-center py-4 rounded-xl shadow-xl md:flex justify-center items-center">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl font-bold text-teal-500 dark:text-white text-center">
              {testimonials[active].name}
            </h3>
            <p className="text-lg text-gray-300 dark:text-neutral-500 text-center">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-xl text-gray-300 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center gap-4 pt-12 md:pt-0 md:mt-10">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-teal-200 hover:bg-teal-300 flex items-center justify-center group"
            >
              <IconArrowLeft className="h-6 w-6 text-teal-500 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-teal-200 hover:bg-teal-300 flex items-center justify-center group"
            >
              <IconArrowRight className="h-6 w-6 text-teal-500 group-hover:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout Adjustments */}
      <div className="md:hidden flex flex-col items-center">
        {/* Testimonial Details Above Image */}
        {/* <motion.div
          key={active}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="mb-8 text-center"
        >
          <h3 className="text-3xl font-bold text-teal-500 dark:text-white">{testimonials[active].name}</h3>
          <p className="text-lg text-gray-300 dark:text-neutral-500">{testimonials[active].designation}</p>
          <motion.p className="text-xl text-gray-300 mt-8 dark:text-neutral-300">
            {testimonials[active].quote.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.02 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </motion.div> */}

        {/* Testimonial Image Below Details */}
        {/* <div className="relative w-full h-96 mb-6">
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
                className="absolute inset-0 origin-bottom"
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
        </div> */}
      </div>
    </div>
  );
};
