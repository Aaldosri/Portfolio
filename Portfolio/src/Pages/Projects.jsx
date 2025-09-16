import React from "react";
import Astronaut from "./../Components/Astronaut";
import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

export default function Projects() {
  return (
    <>
      <div
        dir="rtl"
        id="projects"
        className="w-full overflow-hidden-web flex justify-center"
      >
        <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
          <div className="w-full h-[20%] mb-20">
            <SectionTitle title="المشاريع" subtitle="اعمال انتهيت منها" />
          </div>
          <div className="w-full h-[80%] z-10 flex justify-center">
            <div className="w-full xl:w-[60%] h-full">
              <ProjectCards />
            </div>
            {/* <div className="absolute w-full h-full top-[-25%] right-[-75%] sm:right-[-50%]">
              <Astronaut />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
