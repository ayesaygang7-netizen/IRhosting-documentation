import React, { useState } from "react";

export default function NavbarTop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="custom-navbar">
        {/* دکمه باز کردن منو (مخصوص موبایل) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* لوگو */}
        <a className="navbar-brand" href="/">
          🇮🇷 Hosting 24
        </a>

        {/* منو */}
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <a className="nav-link" href="/">
            خانه
          </a>
          <a className="nav-link" href="/cloud-server/manage-server">
            فضای ابری
          </a>
          <a className="nav-link" href="/support/contact">
            پشتیبانی
          </a>
        </div>
      </nav>

      {/* 🎨 استایل */}
      <style jsx>{`
        .custom-navbar {
          position: fixed;
          top: 0;
          width: 100%;
          height: 56px;
          background-color: #1a1e28;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          z-index: 1100;
          direction: rtl;
        }

        .navbar-brand {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        /* ✨ افکت زیر لوگو */
        .navbar-brand::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #5c87f4;
          transition: width 0.3s ease;
        }

        .navbar-brand:hover {
          color: #5c87f4;
        }

        .navbar-brand:hover::after {
          width: 100%;
        }

        .navbar-toggler {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          position: absolute;
          left: 15px;
          cursor: pointer;
          z-index: 1200;
        }

        .navbar-toggler-icon {
          display: inline-block;
          width: 25px;
          height: 2px;
          background-color: white;
          position: relative;
        }

        .navbar-toggler-icon::before,
        .navbar-toggler-icon::after {
          content: "";
          position: absolute;
          left: 0;
          width: 25px;
          height: 2px;
          background-color: white;
          transition: transform 0.3s ease;
        }

        .navbar-toggler-icon::before {
          top: -7px;
        }

        .navbar-toggler-icon::after {
          top: 7px;
        }

        /* ✅ منوی بازشونده موبایل */
        .navbar-menu {
          position: absolute;
          top: 56px;
          left: 0;
          right: 0;
          background-color: #101522;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s ease;
        }

        .navbar-menu.open {
          max-height: 300px;
          padding: 15px 0;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.3s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #5c87f4;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #9ad0ff;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* ✅ حالت دسکتاپ */
        @media (min-width: 992px) {
          .navbar-toggler {
            display: none;
          }

          .custom-navbar {
            justify-content: flex-start;
            padding-right: 2rem;
          }

          .navbar-menu {
            position: static;
            flex-direction: row;
            align-items: center;
            background: none;
            max-height: none;
            gap: 30px;
            margin-right: 20px;
          }

          .navbar-brand {
            margin-left: 40px;
          }
        }

        /* ✅ حالت موبایل */
        @media (max-width: 768px) {
          .navbar-brand {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .navbar-toggler {
            left: 15px;
            right: auto;
          }
        }
      `}</style>
    </>
  );
}
