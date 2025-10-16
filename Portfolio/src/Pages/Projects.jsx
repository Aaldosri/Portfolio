import React from "react";
import Astronaut from "./../Components/Astronaut";
import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

export default function Projects({ ref }) {
  return (
    <>
      <div
        ref={ref}
        dir="rtl"
        id="projects"
        className="w-full overflow-hidden-web flex justify-center"
      >
        <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
          <div className="w-full h-[20%]  overflow-hidden">
            <SectionTitle title="المشاريع" subtitle="اعمال انتهيت منها" />
          </div>
          <div className="w-full h-[80%] z-10 flex justify-center">
            <div className="w-full xl:w-[60%] pb-10 pt-10 mt-10 h-full overflow-hidden">
              <ProjectCards />
            </div>
            <div
              className="absolute top-0 overflow-visible transform scale-x-[-1]"
              style={{ right: "750px", top: "-150px" }}
            >
              <Astronaut />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
