import React from 'react';
import { Link } from 'react-scroll'; // وارد کردن کتابخانه react-scroll

export default function SidebarRight() {
  return (
    <aside
      className="text-white border-start p-3"
      style={{
        width: '260px',
        position: 'fixed',
        top: '56px',
        right: 0,
        height: 'calc(100vh - 56px)',
        overflowY: 'auto',
        zIndex: 1000,
        backgroundColor: '#001845',  // اعمال رنگ پس‌زمینه جدید
      }}
    >
      <h5 className="mb-4 border-bottom pb-2 text-center">منوی مستندات</h5>
      <nav className="nav flex-column gap-2">
        {[
          { to: 'cloud-server', label: 'سرور ابری' },
          { to: 'cloud', label: 'فضای ابری' },
          { to: 'dedicated-server', label: 'سرور اختصاصی' },
          { to: 'support', label: 'پشتیبانی' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={400}
            offset={-56}
            className="nav-link text-white rounded text-center p-2"
            style={{ cursor: 'pointer' }}
          >
            {label}
          </Link>
        ))}
      </nav>

      <style jsx>{`
        a.nav-link {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        a.nav-link:hover,
        a.nav-link:focus {
          background-color: #0d6efd;
          color: white !important;
          text-decoration: none;
        }
      `}</style>
    </aside>
  );
}
