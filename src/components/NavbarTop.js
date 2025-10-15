import React from 'react';

export default function NavbarTop() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3 shadow-sm">
      {/* منو سمت چپ */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto"> {/* me-auto برای چپ چین کردن */}
          <li className="nav-item">
            <a className="nav-link" href="#cloud">
              فضای ابری
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#support">
              پشتیبانی
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              قیمت گذاری
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#introduction">
              معرفی
            </a>
          </li>
        </ul>
      </div>

      {/* برند سمت راست */}
      <a className="navbar-brand fw-bold ms-auto" href="#">
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
  );
}
