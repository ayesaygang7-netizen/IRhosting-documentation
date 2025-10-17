import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function BreadcrumbBar() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);

  // ساخت مسیر Breadcrumb
  const breadcrumbItems = pathParts.map((part, index) => {
    const path = '/' + pathParts.slice(0, index + 1).join('/');
    const name = decodeURIComponent(part.replace(/-/g, ' '));
    return { name, path };
  });

  return (
    <div
      style={{
        backgroundColor: '#0f1724',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '12px 25px',
        fontFamily: "'Vazir', sans-serif",
        direction: 'rtl',
        color: '#ccc',
        fontSize: '0.9rem',
        position: 'sticky',
        top: '56px',
        zIndex: 1050,
      }}
    >
      <Link
        to="/"
        style={{
          color: '#9AD0FF',
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        خانه
      </Link>

      {breadcrumbItems.map((item, index) => (
        <span key={index}>
          {' '}›{' '}
          {index === breadcrumbItems.length - 1 ? (
            <span style={{ color: '#fff' }}>{item.name}</span>
          ) : (
            <Link
              to={item.path}
              style={{
                color: '#9AD0FF',
                textDecoration: 'none',
              }}
            >
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
