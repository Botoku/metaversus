"use client";
import { motion } from "framer-motion";

import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variant={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-[15%] w-[196px] h-[150px] p-[6px] hidden md:block">
          <img src="upsideDown.png" alt="people" className="w-full h-full" />
          <div>
            <img
              src="Ellipse 41.png"
              alt="people"
              className="w-6 h-6 absolute left-[28px] top-[50%]"
            />
            <img
              src="Ellipse 40.png"
              alt="people"
              className="w-6 h-6 absolute left-[20px] top-[50%]"
            />
            <img
              src="Ellipse 39.png"
              alt="people"
              className="w-6 h-6 absolute left-[12px] top-[50%]"
            />
            <p className="text-white absolute left-[60px] top-[54%] text-[8px] opacity-70">
              +264 has joined
            </p>
            <p className="text-white font-bold absolute left-[15px] top-[70%] text-[14px]">
              The Upside Down
            </p>
          </div>
        </div>

        <div className="absolute top-[10%] left-[65%] w-[196px] h-[150px] p-[6px] hidden md:block">
          <img src="hawkins.png" alt="people" className="w-full h-full" />
          <div>
            <img
              src="Ellipse 41.png"
              alt="people"
              className="w-6 h-6 absolute left-[28px] top-[50%]"
            />
            <img
              src="Ellipse 40.png"
              alt="people"
              className="w-6 h-6 absolute left-[20px] top-[50%]"
            />
            <img
              src="Ellipse 39.png"
              alt="people"
              className="w-6 h-6 absolute left-[12px] top-[50%]"
            />
            <p className="text-white absolute left-[60px] top-[54%] text-[8px] opacity-70">
              +264 has joined
            </p>
            <p className="text-white font-bold absolute left-[15px] top-[70%] text-[14px]">
              Hawkins Labs
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
