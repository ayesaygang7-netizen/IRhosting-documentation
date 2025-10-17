import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function SidebarRight() {
  const [openSection, setOpenSection] = useState(null);
  const [activeItem, setActiveItem] = useState("");

  // نگه‌داشتن باز بودن بخش مربوط به مسیر فعلی
  useEffect(() => {
    const path = window.location.pathname;

    // نگاشت مسیرها به آی‌دی و عنوان زیرمنو
    const pathMap = {
      "/cloud-server/manage-server": { section: "cloud-server", item: "مدیریت سرور" },
      "/cloud-server/connect-server": { section: "cloud-server", item: "اتصال به سرور" },
      "/cloud-server/buy-server": { section: "cloud-server", item: "نحوه خرید سرور" },

      "/cloud/manage-disk": { section: "cloud", item: "مدیریت دیسک" },
      "/cloud/connect-server": { section: "cloud", item: "اتصال به سرور" },
      "/cloud/create-server": { section: "cloud", item: "خرید و ساخت سرور" },

      "/cloud-sakhtar/security": { section: "dedicated-server", item: "امنیت" },
      "/cloud-sakhtar/troubleshooting": { section: "dedicated-server", item: "عیب‌یابی" },
      "/cloud-sakhtar/domain": { section: "dedicated-server", item: "دامنه" },

      "/support/chat": { section: "support", item: "چت" },
      "/support/contact": { section: "support", item: "تماس" },
    };

    const found = pathMap[path];
    if (found) {
      setOpenSection(found.section);
      setActiveItem(found.item);
    }
  }, []);

  const menuItems = [
    {
      id: "cloud-server",
      label: "سرور ابری (VPS)",
      subItems: ["مدیریت سرور", "اتصال به سرور", "نحوه خرید سرور"],
    },
    {
      id: "cloud",
      label: "دیتاسنتر ابری (VPS)",
      subItems: ["مدیریت دیسک", "اتصال به سرور", "خرید و ساخت سرور"],
    },
    {
      id: "dedicated-server",
      label: "شبکه توضیح محتوا (CDN)",
      subItems: ["امنیت", "عیب‌یابی", "دامنه"],
    },
    {
      id: "support",
      label: "پشتیبانی",
      subItems: ["چت", "تماس"],
    },
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const pathMap = {
    "cloud-server": {
      "مدیریت سرور": "/cloud-server/manage-server",
      "اتصال به سرور": "/cloud-server/connect-server",
      "نحوه خرید سرور": "/cloud-server/buy-server",
    },
    cloud: {
      "مدیریت دیسک": "/cloud/manage-disk",
      "اتصال به سرور": "/cloud/connect-server",
      "خرید و ساخت سرور": "/cloud/create-server",
    },
    "dedicated-server": {
      "امنیت": "/cloud-sakhtar/security",
      "عیب‌یابی": "/cloud-sakhtar/troubleshooting",
      "دامنه": "/cloud-sakhtar/domain",
    },
    support: {
      "چت": "/support/chat",
      "تماس": "/support/contact",
    },
  };

  const handleItemClick = (id, item, href) => {
    setActiveItem(item);
    setOpenSection(id);
    window.location.href = href; // انتقال به صفحه
  };

  return (
    <aside
      className="text-white border-start p-3"
      style={{
        width: "260px",
        position: "fixed",
        top: "56px",
        right: 0,
        height: "calc(100vh - 56px)",
        overflowY: "auto",
        zIndex: 1000,
        backgroundColor: "#030A1C",
      }}
    >
      <h5 className="mb-4 border-bottom pb-2 text-center">منوی مستندات</h5>

      <nav className="nav flex-column gap-2">
        {menuItems.map(({ id, label, subItems }) => {
          const isOpen = openSection === id;
          return (
            <div key={id}>
              {/* بخش اصلی */}
              <div
                className={`custom-sidebar-link d-flex justify-content-between align-items-center p-2 rounded ${
                  isOpen ? "active" : ""
                }`}
                onClick={() => toggleSection(id)}
              >
                <span
                  style={{
                    transform: isOpen ? "translateX(8px)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  {label}
                </span>
                <FaChevronDown
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </div>

              {/* زیرمنو */}
              {isOpen && (
                <div className="ps-4 pt-2 fade-in d-flex flex-column gap-2">
                  {subItems.map((item) => {
                    const href = pathMap[id]?.[item] || "#";
                    const isActive = activeItem === item;
                    return (
                      <button
                        key={item}
                        className={`subitem-btn ${isActive ? "active-sub" : ""}`}
                        onClick={() => handleItemClick(id, item, href)}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <style jsx>{`
        .custom-sidebar-link {
          font-size: 0.95rem;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .custom-sidebar-link:hover {
          background-color: #04123a;
        }

        .custom-sidebar-link.active {
          background-color: #051844;
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
          font-size: 0.9rem;
          text-align: right;
          padding: 6px 12px;
          border-radius: 6px;
          transition: background-color 0.3s ease;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }

        .subitem-btn:hover {
          background-color: #0a1d52;
        }

        .subitem-btn.active-sub {
          background-color: #0d6efd;
          color: white;
          font-weight: 600;
        }

        .subitem-btn:focus {
          outline: none;
        }
      `}</style>
    </aside>
  );
}
