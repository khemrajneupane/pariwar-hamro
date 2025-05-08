"use client"; // Required for interactivity
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import "./header.css";
import DigitalWatch from "../digital-watch/DigitalWatch";

const Header = () => {
  const [isMembersVisible, setIsMembersVisible] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
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
  const { data } = useSession();
  const logoutHandler = () => {
    signOut();
  };
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
    <header className="header bg-primary text-white shadow-sm sticky-top py-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo and Family Members Dropdown */}
          <div className="d-flex align-items-center">
            <div className="position-relative me-3">
              <button
                className={`btn btn-light rounded-circle p-2 p-md-3 d-flex align-items-center justify-content-center ${
                  isMembersVisible ? "active bg-warning" : ""
                }`}
                onClick={() => setIsMembersVisible(!isMembersVisible)}
                ref={dropdownRef}
                aria-label="Family members"
              >
                <span className="fs-6">👨‍👩‍👧‍👦</span>
              </button>

              {isMembersVisible && (
                <div
                  className="members-dropdown position-absolute start-0 mt-2 bg-white text-dark rounded shadow-lg p-3 z-3"
                  style={{ minWidth: "250px" }}
                >
                  <h3 className="dropdown-title fs-5 fw-bold mb-3 text-center border-bottom pb-2">
                    Family Members
                  </h3>
                  <ul className="members-list list-unstyled">
                    {members.map((member, index) => (
                      <li
                        key={index}
                        className="member-item py-2 px-3 rounded hover-bg-light"
                      >
                        <div className="d-flex align-items-center fs-6 fs-md-6 fs-lg-5 fs-xl-4">
                          <span className="me-2">👤</span>
                          <span>{member}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <h1 className="logo-text mb-0 fs-6 fs-md-5 fs-lg-4 fs-xl-3 fw-bold">
              <Link href="/" className="text-white text-decoration-none">
                {`हाम्रो परिवार ${data?.user?.name ? data?.user?.name : ""}`}
              </Link>
            </h1>
          </div>

          {/* Current Date */}
          <div className="d-none d-lg-block bg-white text-primary rounded-pill px-3 py-1 fw-semibold">
            {formattedDate}
          </div>
          <div className="current-date d-none d-md-block bg-white text-primary rounded-pill px-3 py-1 fw-semibold">
            {<DigitalWatch />}
          </div>

          {/* Navigation Links */}
          <nav className="nav-links d-flex align-items-center gap-3">
            <Link
              href="/image-upload"
              className="nav-link btn btn-success btn-sm px-3 py-1 rounded-pill"
            >
              <i className="fas fa-cloud-upload-alt me-2"></i>Upload
            </Link>
            <Link
              href="/"
              className="nav-link btn btn-success btn-sm px-3 py-1 rounded-pill"
            >
              <i className="fas fa-images me-2"></i>Gallery
            </Link>

            {data?.user ? (
              <button
                onClick={logoutHandler}
                className="nav-link btn btn-danger btn-sm px-3 py-1 rounded-pill"
              >
                <i className="fas fa-sign-out-alt me-2"></i>Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="nav-link btn btn-success btn-sm px-3 py-1 rounded-pill"
              >
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
