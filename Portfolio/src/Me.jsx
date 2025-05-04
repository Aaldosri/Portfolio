import React from "react";

export default function Me({ darkMode }) {
  return (
    <>
      <section dir="rtl" className="mr-40 text-[#b33939]">
        <div className="relative inline-block group">
          <h1 className="text-4xl mb-5" style={{ fontFamily: "TajawalBold" }}>
            مطور مواقع
            <span className="absolute bottom-0 left-0 right-0 border-b-2 border-[#b33939]"></span>
          </h1>
        </div>

        <h1
          className={`text-3xl mt-5 ${darkMode ? "text-[#000]" : "text-white"}`}
        >
          معلومات اضافية
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mt-5 ">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-4">
              <span className="text-2xl font-semibold">الاسم:</span>
              <span className="text-2xl">عبدالله الدوسري</span>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-semibold">العمر:</span>
              <span className="text-2xl">22</span>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-semibold">الجنسية:</span>
              <span className="text-2xl">سعودي</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 ">
            <div className="flex gap-4 ">
              <span className="text-2xl font-semibold">المدينة:</span>
              <span className="text-2xl">الرياض</span>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-semibold">الإيميل:</span>
              <span className="text-2xl">abood.v000@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
