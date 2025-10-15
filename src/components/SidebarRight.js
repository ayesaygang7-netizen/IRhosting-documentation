import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function SidebarRight() {
  const [openSection, setOpenSection] = useState(null);

  const menuItems = [
    {
      id: 'cloud-server',
      label: 'سرور ابری (VPS)',
      subItems: ['مدیریت سرور', 'اتصال به سرور', 'نحوه خرید سرور'],
    },
    {
      id: 'cloud',
      label: 'دیتاسنتر ابری (VPS)',
      subItems: ['مدیریت دیسک', 'اتصال به سرور', 'خرید و ساخت سرور'],
    },
    {
      id: 'dedicated-server',
      label: 'شبکه توضیح محتوا (CDN)',
      subItems: ['امنیت', 'عیب‌یابی', 'دامنه'],
    },
    {
      id: 'support',
      label: 'پشتیبانی',
      subItems: ['چت', 'تماس'],
    },
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

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
        backgroundColor: '#04052e',
      }}
    >
      <h5 className="mb-4 border-bottom pb-2 text-center">منوی مستندات</h5>
      <nav className="nav flex-column gap-2">
        {menuItems.map(({ id, label, subItems }) => {
          const isOpen = openSection === id;
          return (
            <div key={id}>
              <div
                className={`custom-sidebar-link d-flex justify-content-between align-items-center p-2 rounded ${
                  isOpen ? 'active' : ''
                }`}
                onClick={() => toggleSection(id)}
              >
                <span
                  style={{
                    transform: isOpen ? 'translateX(8px)' : 'none',
                    transition: 'transform 0.3s',
                  }}
                >
                  {label}
                </span>
                <FaChevronDown
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </div>

              {isOpen && (
                <div className="ps-4 pt-2 fade-in d-flex flex-column gap-2">
                  {subItems.map((item, index) => (
                    <button key={index} className="subitem-btn">
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <style jsx>{`
        .custom-sidebar-link {
          font-size: 0.95rem; /* کوچک‌تر از قبل */
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .custom-sidebar-link:hover {
          background-color: #020d3d; /* آبی خیلی تیره */
        }

        .custom-sidebar-link.active {
          background-color: #020d3d;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .subitem-btn {
          background-color: transparent;
          border: none;
          color: white;
          font-size: 0.9rem; /* کوچکتر از قبل */
          text-align: right;
          padding: 6px 12px;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }

        .subitem-btn:hover {
          background-color: #0d6efd; /* آبی پررنگ */
          color: white;
        }

        .subitem-btn:focus {
          outline: none;
        }
      `}</style>
    </aside>
  );
}
