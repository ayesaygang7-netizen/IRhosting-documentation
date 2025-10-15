import React from 'react';

export default function NavbarTop() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3 shadow-sm">
        {/* منو سمت چپ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item">
              <a className="nav-link custom-link" href="#cloud">
                فضای ابری
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#support">
                پشتیبانی
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#pricing">
                قیمت‌گذاری
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#introduction">
                معرفی
              </a>
            </li>
          </ul>
        </div>

        {/* برند سمت راست */}
        <a className="navbar-brand fw-bold ms-auto text-white custom-brand" href="#">
          🇮🇷 ایران هاستینگ ۲۴
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>

      {/* استایل‌ها */}
      <style jsx>{`
        .custom-link {
          color: white !important;
          font-size: 1.05rem;
          padding: 10px 16px;
          border-radius: 8px;
          transition: background-color 0.3s ease, font-weight 0.3s ease;
        }

        .custom-link:hover,
        .custom-link:focus {
          background-color: #1e2a46;
          font-weight: 500;
          text-decoration: none;
        }

        .custom-brand {
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}
