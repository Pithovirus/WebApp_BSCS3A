"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Mark Andrei Encanto",
    role: "Project Manager",
    imgSrc: "/assets/MARKPIC.png",
    imgPosition: "-top-10",
    imgWidth: "w-[240px]",
    imgHeight: "h-[423px]",
  },
  {
    name: "Chariz Dianne Falco",
    role: "Developer",
    imgSrc: "/assets/CHAPIC.png",
    imgPosition: "-top-[6rem]",
    imgWidth: "w-[260px]",
    imgHeight: "h-[480px]",
  },
  {
    name: "Khee Jay Galvez",
    role: "Developer",
    imgSrc: "/assets/KJPIC.png",
    imgPosition: "-top-[8.5rem]",
    imgWidth: "w-[360px]",
    imgHeight: "h-[520px]",
  },
  {
    name: "Allan Andrews Tacuel",
    role: "Illustrator/Asset Director",
    imgSrc: "/assets/allanp.png",
    imgPosition: "-top-[4.6rem]",
    imgWidth: "w-[1080px]",
    imgHeight: "h-[480px]",
  },
  {
    name: "Cherilyn Marie Deocampo",
    role: "UI/UX Designer",
    imgSrc: "/assets/CHEPIC.png",
    imgPosition: "bottom-[11.25rem]",
    imgWidth: "w-[340px]",
    imgHeight: "h-[520px]",
  },
  {
    name: "Jephone Israel Jireh Torre",
    role: "UI/UX Designer",
    imgSrc: "/assets/JEPHPIC.png",
    imgPosition: "bottom-[11.25rem]",
    imgWidth: "w-[460px]",
    imgHeight: "h-[620px]",
  },
];

export default function AboutPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/assets/aboutTopBg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30rem",
          width: "100%",
          filter: "#912828",
          color: "white",
        }}
      >
        <div className="mx-16 pt-[15%] tracking-wider">
          <div className="flex items-center">
            <motion.div
              className="w-4 h-9 bg-[#620808] mr-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            ></motion.div>
            <motion.h1
              className="text-[4rem] font-extrabold"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              What is Kantonize?
            </motion.h1>
          </div>
          <motion.h2
            className="ml-[3rem] tracking-wider text-[16px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0 }}
          >
            Kantonize is a Kanton Customizing Website. The customization you
            never knew you’ll need.
          </motion.h2>
        </div>
      </div>

      <div className="text-center my-12">
        <motion.h1
          className="text-6xl font-extrabold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          MEET THE TEAM
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-auto py-16 relative mt-36">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center relative"
          >
            <motion.div
              className="bg-[#912828] w-full max-w-lg aspect-[4/3] relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            ></motion.div>
            <motion.img
              src={member.imgSrc}
              alt={member.name}
              className={`absolute ${member.imgPosition} ${member.imgWidth} ${member.imgHeight} z-10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.div
              className="text-center mb-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h2 className="text-black text-xl font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
