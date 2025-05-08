import React from "react";
import "./Footer.css";
function Footer() {
  // Get today's date
  const today = new Date();

  // Format the date as you prefer (e.g., "May 7, 2025")
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <footer className="footer">
      <span>Hamro Paribar Album.</span>
      <span>2010 - {formattedDate}.</span>
      <span>
        All Rights Reserved.<i className="fas fa-copyright"></i>{" "}
        <span>Khem</span>
      </span>
    </footer>
  );
}

export default Footer;
