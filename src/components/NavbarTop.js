import React from 'react';

export default function NavbarTop() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3 shadow-sm">
      <a className="navbar-brand fw-bold" href="#">
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#introduction">
              معرفی
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cloud">
              فضای ابری
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              قیمت گذاری
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#support">
              پشتیبانی
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
