import React from "react";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <>
      <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-1 py-6">
        <div class="w-3/12 flex justify-end">
          <div className="wrapper">
            <input type="checkbox" name="checkbox" className="switch" />
          </div>

          <div>
            <Button variant="outlined">EN</Button>
          </div>
        </div>
        <nav class="nav font-semibold text-lg">
          <ul class="flex items-center">
            <li class="relative group p-4 cursor-pointer">
              <a
                href=""
                class="text-green-950 group-hover:text-green-500 transition-colors duration-200"
              >
                للتواصل
              </a>
              <span class="absolute right-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>
            <li class="relative group p-4 cursor-pointer">
              <a
                href=""
                class="text-green-950 group-hover:text-green-500 transition-colors duration-200"
              >
                المهارات
              </a>
              <span class="absolute right-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>
            <li class="relative group p-4 cursor-pointer">
              <a
                href=""
                class="text-green-950 group-hover:text-green-500 transition-colors duration-200"
              >
                المشاريع
              </a>
              <span class="absolute right-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>{" "}
            <li class="relative group p-4 cursor-pointer">
              <a
                href=""
                class="text-green-950 group-hover:text-green-500 transition-colors duration-200"
              >
                من انا
              </a>
              <span class="absolute right-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>
          </ul>
        </nav>
        <div class="relative group p-4 cursor-pointer">
          <h1
            href=""
            class="text-4xl text-green-950 group-hover:text-green-500 transition-colors duration-200 text-right mr-8"
          >
            {" "}
            عبدالله
          </h1>
          <span class="absolute right-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-500 group-hover:w-full origin-right mr-4"></span>
        </div>
      </header>
    </>
  );
}
