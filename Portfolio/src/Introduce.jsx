import React from "react";
import img2 from "./img/Me.png";
export default function Introduce() {
  return (
    <>
      <section
        className="flex flex-col md:flex-row  justify-center gap-50 items-start mt-10 min-h-[600px]"
        dir="rtl"
      >
        <div className="flex gap-8">
          <div style={{ fontFamily: "TajawalBold" }}>
            <h1 className="text-5xl text-[#b33939] m-5">أهلا !</h1>
            <h1 className="text-5xl text-[#b33939] m-5">أنا عبدالله الدوسري</h1>
            <h1 className="text-2xl text-[#b33939] m-5 mt-10">
              مطور ويب قادر انه يساعدك ببناء المواقع بشكل احترافي
            </h1>
            {/* <h1 className="text-2xl text-[#b33939] m-5 mt-0">بشكل احترافي</h1> */}
            <div className="flex gap-8 mt-15 m-5">
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-[#0077B5] hover:text-[#005C8A] transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-[#333] hover:text-[#6e5494] transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-[500px] h-[500px] overflow-hidden rounded-xl shadow-md">
            <img
              src={img2}
              alt="صورة"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}
