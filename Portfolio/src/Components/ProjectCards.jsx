import React from "react";
import { useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import move from "lodash-move";
import img from "../img/pro1.png";
import img2 from "../img/pro2.png";
import img3 from "../img/pro3.png";
import img4 from "../img/pro4.png";

import { v4 as uuidv4 } from "uuid";
import { FaGithub } from "react-icons/fa";

export default function ProjectCards() {
  const projects = [
    {
      id: uuidv4(),
      name: "HEALTHY",
      description: "",
      image: img,
      source_code_link: "https://github.com/Aaldosri/HEALTHY",
      demo_link: "https://healthy-r.netlify.app/",
    },
    {
      id: uuidv4(),
      name: "Weather",
      description: "",
      image: img2,
      source_code_link: "https://github.com/Aaldosri/Weather",
      demo_link: "https://weather-ksa.netlify.app/",
    },
    {
      id: uuidv4(),
      name: "Adventure Tour",
      description: "",
      image: img3,
      source_code_link: "https://github.com/Aaldosri/Adventures-Tours",
      demo_link: "https://adventure-tours-w.netlify.app/",
    },
    {
      id: uuidv4(),
      name: "مواقيت الصلاة",
      description:
        "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
      image: img4,
      source_code_link: "https://github.com/Aaldosri/Prayers",
      demo_link: "https://prayer-times-sa.netlify.app/",
    },
  ];

  const projectsImages = projects.map((project) => {
    return project.image;
  });

  const cardsOffset = 50;
  const scaleFactor = 0.06;

  const [cards, setCards] = useState(projects);
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
          className="relative w-[80%] h-[80%] mt-20"
        >
          {cards.map((project, index) => {
            const canDrag = true;
            return (
              <motion.li
                key={project.id}
                animate={{
                  top: index * -cardsOffset,
                  scale: 1 - index * scaleFactor,
                  zIndex: projectsImages.length - index,
                  y: 0,
                }}
                transition={{ duration: 0.5, type: "spring" }}
                drag={canDrag ? "y" : false}
                dragConstraints={{ top: 10, bottom: 10 }}
                onDragEnd={() => moveToEnd(index)}
                className="absolute w-full h-full bg-primary-400 origin-[top-center] list-none rounded-xl flex flex-col overflow-hidden"
              >
                {/* الصورة */}
                <div className="relative w-full h-full overflow-hidden rounded-xl group">
                  {/* الصورة */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex justify-center items-center">
                    {/* المربع المركزي */}
                    <div className="bg-black/80 p-6 rounded-lg text-center space-y-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-semibold">
                        {project.name}
                      </h3>
                      <div className="flex justify-center gap-4">
                        <a
                          href={project.source_code_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a
                          href={project.demo_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </LazyMotion>
    </div>
  );
}
