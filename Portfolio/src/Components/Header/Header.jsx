import React from "react";

// External Libraries

import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div>
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
        <div style={{ display: "flex", gap: "20px" }}>
          <button className="h1">للتواصل</button>

          <button className="h1">المهارات</button>
          <button className="h1">المشاريع</button>

          <button className="h1">عني</button>
        </div>
        <div>
          <Button variant="outlined">EN</Button>
        </div>
      </div>
    </div>
  );
}
