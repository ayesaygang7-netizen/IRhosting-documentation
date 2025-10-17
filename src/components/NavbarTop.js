import React from 'react';

export default function NavbarTop() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top px-3 shadow-sm"
        style={{ backgroundColor: '#1a1e28' }}
      >
        {/* منو سمت چپ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item">
              {/* ⬅ خانه (می‌فرسته به صفحه اصلی) */}
              <a className="nav-link custom-link" href="/">
                خانه
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="/cloud-server/manage-server">
                فضای ابری
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="/support/contact">
                پشتیبانی
              </a>
            </li>
          </ul>
        </div>

        {/* ⬅ لوگو سمت راست (همچنین لینک به صفحه اصلی بدون خط زیر) */}
        <a
          className="navbar-brand fw-bold ms-auto text-white custom-brand"
          href="/"
          style={{ textDecoration: 'none' }} // ⛔ حذف underline از لوگو
        >
          🇮🇷 Hosting 24
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

      {/* 🎨 استایل‌ها */}
      <style jsx>{`
        .custom-link {
          color: white !important;
          font-size: 1.05rem;
          padding: 10px 16px;
          border-radius: 8px;
          transition: background-color 0.3s ease, font-weight 0.3s ease;
          text-decoration: none !important; /* ⛔ حذف خط از لینک‌ها */
        }

        .custom-link:hover,
        .custom-link:focus {
          background-color: #1e2a46;
          font-weight: 500;
          text-decoration: none !important; /* ⛔ جلوگیری از خط زیر */
        }

        .custom-brand {
          font-size: 1.2rem;
          color: white !important;
          text-decoration: none !important; /* ⛔ لوگو بدون خط زیر */
        }

        .custom-brand:hover {
          color: #5c87f4 !important;
          text-decoration: none !important;
        }
      `}</style>
    </>
  );
}
