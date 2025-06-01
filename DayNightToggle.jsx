import React, { useState } from "react";
import "./DayNightToggle.css"; // Import the CSS file

const DayNightToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "container dark" : "container light"}>
      <h1>{isDark ? "Good Night 🌜" : "Good Morning 🌞"}</h1>
      <button className="toggle-btn" onClick={toggleMode}>
        {isDark ? "☀ Day Mode" : "🌙 Night Mode"}
      </button>
    </div>
  );
};

export default DayNightToggle;
