import React from "react";

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactServices from "../Components/ContactServices";
import ContactForm from "../Components/ContactForm";
import GlobeComponent from "../Components/GlobeComponent";
import SocialLinks from "../Components/SocialLinks";

export default function Contact({ ref }) {
  return (
    <div
      ref={ref}
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full overflow-hidden" dir="rtl">
          <SectionTitle title="للتواصل" subtitle="أرسل رسالتك" />
        </div>
        <div className="w-full flex justify-center items-center overflow-hidden">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full  sm:w-[90%] md:w-[80%] sm:h-[600px] rounded-xl border-4 border-primary-400 p-4 flex flex-col sm:flex-row gap-4"
            >
              <ContactServices />
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
        <GlobeComponent />
      </div>
      <div className="w-full flex flex-col ">
        <SocialLinks />
        <div className="bg-[#1a1a1a] flex justify-center pb-4 text-grayscale-400 select-none">
          <span>@ Aaldosri | جميع الحقوق محفوظة 2025</span>
        </div>
      </div>
    </div>
  );
}
