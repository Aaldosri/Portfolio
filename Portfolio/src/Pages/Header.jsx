import React from "react";

// External Libraries

import Button from "@mui/material/Button";

export default function Header() {
  return (
    <nav className="font-semibold text-lg">
      <div className="div-header">
        <div>
          <div className="wrapper">
            <input
              type="checkbox"
              name="checkbox"
              className="switch"
              // onChange={handleDarkMode}
              // checked={darkMode}
            />
          </div>
        </div>
        <div>
          <ul
            style={{ gap: "50px", color: "white", fontSize: "1.8rem" }}
            className="flex list-none relative"
          >
            <li className="relative cursor-pointer p-4 group">
              <span className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]">
                للتواصل
              </span>
              <span className="underline"></span>
            </li>
            <li className="relative cursor-pointer p-4 group">
              <span className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]">
                المهارات
              </span>
              <span className="underline"></span>
            </li>
            <li className="relative cursor-pointer p-4 group">
              <span className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]">
                المشاريع
              </span>
              <span className="underline"></span>
            </li>
            <li className="relative cursor-pointer p-4 group">
              <span className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]">
                نبذة عني
              </span>
              <span className="underline"></span>
            </li>
          </ul>
        </div>

        <div>
          <Button variant="outlined">EN</Button>
        </div>
      </div>
    </nav>
  );
}
