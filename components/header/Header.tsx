"use client"; // Required for interactivity
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isMembersVisible, setIsMembersVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const today = new Date();

  const members = [
    "Ranil Tandukar",
    "Dipak Jung Rayamajhi",
    "Debendra Chilwal",
    "Satya Prakash Kadel",
    "Khem Raj Neupane",
    "Anjula Tandukar",
    "Ishmriti Rayamajhi Baniya",
    "Sunita Kaini",
    "Rajya Laxmi Shrestha",
    "Babita Gartaula Neupane",
    "Junior Satya",
    "Kiyana",
    "Rivansh",
    "Ashvika",
    "Biansha",
    "Riyansh",
    "Aarush",
  ];

  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMembersVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <div
          className={`user-icon ${isMembersVisible ? "active" : ""}`}
          onClick={() => setIsMembersVisible(!isMembersVisible)}
          ref={dropdownRef}
        >
          <span>👨‍👩‍👧‍👦</span>
          {isMembersVisible && (
            <div className="members-dropdown">
              <h3 className="dropdown-title">Family Members</h3>
              <ul className="members-list">
                {members.map((member, index) => (
                  <li key={index} className="member-item">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <h1 className="logo-text">Hamro Pariwar Images</h1>
      </div>

      <div className="current-date">{formattedDate}</div>

      <nav className="nav-links">
        <Link href="/image-upload" className="nav-link">
          Upload Image
        </Link>
        <Link href="/" className="nav-link">
          View Gallery
        </Link>
      </nav>
    </header>
  );
};

export default Header;
