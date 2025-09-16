import React from "react";
import { useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import move from "lodash-move";
import img from "../img/pro1.png";
import img2 from "../img/pro2.png";
import img3 from "../img/pro3.png";
import img4 from "../img/pro4.png";

export default function ProjectCards() {
  const projects = [
    {
      name: "Venomsoul E-Commerce",
      description: "",
      image: img,
      source_code_link: "https://github.com/valeriusec",
      demo_link: "https://infopilot.netlify.app/",
    },
    {
      name: "Venomsoul E-Commerce",
      description: "",
      image: img2,
      source_code_link: "https://github.com/valeriusec",
      demo_link: "https://infopilot.netlify.app/",
    },
    {
      name: "Tesla Website",
      description: "",
      image: img3,
      source_code_link: "https://github.com/valeriusec/tesla-website",
      demo_link: "https://infopilot.netlify.app/",
    },
    {
      name: "Jammming App",
      description:
        "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
      image: img4,
      source_code_link: "https://github.com/valeriusec/jammming-app",
      demo_link: "https://jammming-b7d.pages.dev/",
    },
  ];

  const projectsImages = projects.map((project) => {
    return project.image;
  });

  const cardsOffset = 30;
  const scaleFactor = 0.06;

  const [cards, setCards] = useState(projectsImages);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <LazyMotion features={domAnimation}>
        <motion.ul
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative w-[80%] h-[70%]"
        >
          {cards.map((image, index) => {
            const canDrag = true;
            return (
              <motion.li
                key={image}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  cursor: canDrag ? "grab" : "auto",
                }}
                animate={{
                  top: index * -cardsOffset,
                  scale: 1 - index * scaleFactor,
                  zIndex: projectsImages.length - index,
                  y: 0, // ترجع البطاقة لمكانها
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
                drag={canDrag ? "y" : false}
                dragConstraints={{
                  top: 10,
                  bottom: 10,
                }}
                onDragEnd={() => {
                  moveToEnd(index);
                }}
                className="absolute w-full h-full bg-primary-400 origin-[top-center] list-none rounded-xl"
              ></motion.li>
            );
          })}
        </motion.ul>
      </LazyMotion>
    </div>
  );
}
