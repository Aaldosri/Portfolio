import React from "react";
import { useRef, useState } from "react";

// Externall Libraries
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4z9ymac",
        "template_ir6z0xe",
        form.current,
        "3Doe_o0i-bohCcBFy"
      )
      .then(
        () => {
          form.current.reset();
          setIsSent(true);
          alert("تم إرسال الرسالة بنجاح!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSent(false);
          alert("حدث خطأ أثناء الإرسال.");
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
      }}
      className="w-full sm:w-[60%] h-full bg-grayscale rounded-xl pt-10 pb-10 pl-8 pr-8 shadow-2xl"
    >
      <div>
        <h2
          style={{ fontFamily: "TajawalRegular" }}
          className="message text-5xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["عندك أفكار؟", "!خلنا نتعاون"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center mt-15" dir="rtl">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "TajawalRegular" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            <label htmlFor="firstname">الاسم</label>
            <input
              className="p-[0.5em] rounded-xl text-black bg-white"
              placeholder="اكتب اسمك"
              id="firstname"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">الايميل</label>
            <input
              className="p-[0.5em] rounded-xl text-black bg-white"
              placeholder="اكتب ايميلك"
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>الرسالة</label>
            <textarea
              className="p-[0.5em] rounded-xl text-black bg-white resize-none"
              placeholder="اكتب رسالتك ..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[100px] h-[50px] bg-primary-600 rounded-xl cursor-pointer hover:bg-primary-700"
              type="submit"
              value={!isSent ? "Send" : "Done!"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
