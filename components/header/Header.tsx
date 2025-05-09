"use client"; // Required for interactivity
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import "./header.css";
import DigitalWatch from "../digital-watch/DigitalWatch";

// Type for fallback member and fetched user data
interface Member {
  name: string;
  picture: string;
}

interface FetchedUser {
  name: string;
  picture?: string;
}

const Header = () => {
  const [isMembersVisible, setIsMembersVisible] = useState(false);
  const [allMembers, setAllMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLImageElement>(null);
  const today = new Date();

  // Hardcoded fallback users
  const fallbackMembers: Member[] = [
    { name: "Ranil Tandukar", picture: "/images/user-heart-fill.png" },
    { name: "Dipak Jung Rayamajhi", picture: "/images/user-heart-fill.png" },
    { name: "Debendra Chilwal", picture: "/images/user-heart-fill.png" },
    { name: "Satya Prakash Kadel", picture: "/images/user-heart-fill.png" },
    { name: "Khem Raj Neupane", picture: "/images/user-heart-fill.png" },
    { name: "Anjula Tandukar", picture: "/images/user-heart-fill.png" },
    {
      name: "Ishmriti Rayamajhi Baniya",
      picture: "/images/user-heart-fill.png",
    },
    { name: "Sunita Kaini", picture: "/images/user-heart-fill.png" },
    { name: "Rajya Laxmi Shrestha", picture: "/images/user-heart-fill.png" },
    { name: "Babita Gartaula Neupane", picture: "/images/user-heart-fill.png" },
    { name: "Junior Satya", picture: "/images/user-heart-fill.png" },
    { name: "Kiyana", picture: "/images/user-heart-fill.png" },
    { name: "Rivansh", picture: "/images/user-heart-fill.png" },
    { name: "Ashvika", picture: "/images/user-heart-fill.png" },
    { name: "Biansha", picture: "/images/user-heart-fill.png" },
    { name: "Riyansh", picture: "/images/user-heart-fill.png" },
    { name: "Aarush", picture: "/images/user-heart-fill.png" },
  ];

  const { data } = useSession();
  console.log("headersessiondata", data);
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Fuzzy matching helper
  const hasFourCharSubstringMatch = (str1: string, str2: string): boolean => {
    const clean1 = str1.toLowerCase().replace(/\s+/g, "");
    const clean2 = str2.toLowerCase().replace(/\s+/g, "");

    for (let i = 0; i <= clean1.length - 4; i++) {
      const sub = clean1.substring(i, i + 4);
      if (clean2.includes(sub)) {
        return true;
      }
    }
    return false;
  };

  // Fetch members on mount
  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const res = await fetch("/api/auth/getallusers");
        const data = await res.json();
        const fetched: FetchedUser[] = data.users || [];

        // Merge fetched users with fallback members using fuzzy match
        const merged = fallbackMembers.map((fallback) => {
          const match = fetched.find((user) =>
            hasFourCharSubstringMatch(user.name, fallback.name)
          );
          return match
            ? { name: match.name, picture: match.picture || fallback.picture }
            : fallback;
        });

        setAllMembers(merged);
      } catch (error) {
        setAllMembers(fallbackMembers); // Fallback to hardcoded
      } finally {
        setLoading(false);
      }
    };

    fetchAllMembers();
  }, []);

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
  console.log("fetched allMembers", allMembers);
  return (
    <header className="header bg-primary text-white shadow-sm sticky-top py-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo and Family Members Dropdown */}
          <div className="d-flex align-items-center">
            <div className="position-relative me-3">
              {!data?.user ? (
                <button
                  className={`btn btn-light rounded-circle p-2 p-md-3 d-flex align-items-center justify-content-center ${
                    isMembersVisible ? "active bg-warning" : ""
                  }`}
                  aria-label="Family members"
                >
                  <span className="fs-6">👨‍👩‍👧‍👦</span>
                </button>
              ) : (
                <img
                  src={
                    data?.user?.image
                      ? data?.user?.image
                      : "/images/user-heart-fill.png"
                  }
                  alt="User"
                  height="50px"
                  width="50px"
                  className="btn btn-info rounded-circle p-1 d-flex align-items-center justify-content-center"
                  onClick={() => setIsMembersVisible(!isMembersVisible)}
                  ref={dropdownRef}
                />
              )}

              {isMembersVisible && (
                <div
                  className="members-dropdown position-absolute start-0 mt-2 bg-white text-dark rounded shadow-lg p-3 z-3"
                  style={{ minWidth: "250px" }}
                >
                  <h3 className="dropdown-title fs-5 fw-bold mb-3 text-center border-bottom pb-2">
                    Family Members
                  </h3>
                  <ul className="members-list list-unstyled">
                    {allMembers.map((member, index) => (
                      <li
                        key={index}
                        className="member-item py-2 px-3 rounded hover-bg-light"
                      >
                        <div className="d-flex align-items-center fs-6 fs-md-6 fs-lg-5 fs-xl-4">
                          <img
                            src={member.picture}
                            alt={member.name}
                            height="40px"
                            width="40px"
                            className="rounded-circle me-2"
                          />
                          <span className="text-truncate">{member.name}</span>
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
