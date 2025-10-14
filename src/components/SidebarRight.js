import React from 'react';

export default function SidebarRight() {
  return (
    <aside
      className="bg-dark text-white border-start p-3"
      style={{
        width: '260px',
        position: 'fixed',
        top: '56px',
        right: 0,
        height: 'calc(100vh - 56px)',
        overflowY: 'auto',
        zIndex: 1000,
      }}
    >
      <h5 className="mb-4 border-bottom pb-2 text-center">منوی مستندات</h5>
      <nav className="nav flex-column gap-2"> {/* gap برای فاصله بین آیتم‌ها */}
        {[
          { href: '#introduction', label: 'معرفی' },
          { href: '#cloud', label: 'فضای ابری' },
          { href: '#pricing', label: 'قیمت‌گذاری' },
          { href: '#support', label: 'پشتیبانی' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="nav-link text-white rounded text-center p-2"
            style={{ cursor: 'pointer' }}
          >
            {label}
          </a>
        ))}
      </nav>

      <style jsx>{`
        a.nav-link {
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        a.nav-link:hover,
        a.nav-link:focus {
          background-color: #0d6efd;  /* رنگ آبی بوت‌استرپ */
          color: white !important;
          text-decoration: none;
        }
      `}</style>
    </aside>
  );
}
