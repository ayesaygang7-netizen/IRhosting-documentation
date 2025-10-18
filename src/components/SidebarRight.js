import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function SidebarRight() {
  const [openSection, setOpenSection] = useState(null);
  const [activeItem, setActiveItem] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const pathMap = {
      "/cloud-server/manage-server": { section: "cloud-server", item: " فضای ابری" },
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
      subItems: [" فضای ابری", "اتصال به سرور", "نحوه خرید سرور"],
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

  const pathMap = {
    "cloud-server": {
      " فضای ابری": "/cloud-server/manage-server",
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

  const toggleSection = (id) => setOpenSection(openSection === id ? null : id);

  const handleItemClick = (id, item, href) => {
    setActiveItem(item);
    setOpenSection(id);
    window.location.href = href;
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            position: "fixed",
            top: "12px",
            right: "15px",
            zIndex: 2000,
            background: "none",
            border: "none",
            color: "white",
            fontSize: "1.6rem",
            cursor: "pointer",
          }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <aside
        style={{
          width: isMobile ? (isMenuOpen ? "80%" : "0") : "260px",
          position: "fixed",
          top: "56px",
          right: 0,
          height: "calc(100vh - 56px)",
          overflowY: "auto",
          backgroundColor: "#030A1C",
          color: "white",
          padding: isMobile ? (isMenuOpen ? "20px" : "0") : "20px",
          transition: "all 0.4s ease",
          zIndex: 1500,
          borderLeft: isMobile ? "none" : "1px solid #0f172a",
        }}
      >
        {(!isMobile || isMenuOpen) && (
          <>
            <h5 className="mb-4 border-bottom pb-2 text-center">منوی مستندات</h5>

            <nav className="nav flex-column gap-2">
              {menuItems.map(({ id, label, subItems }) => {
                const isOpen = openSection === id;
                return (
                  <div key={id}>
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

                    {isOpen && (
                      <div className="ps-4 pt-2 fade-in d-flex flex-column gap-2">
                        {subItems.map((item, index) => {
                          const href = pathMap[id]?.[item] || "#";
                          const isActive = activeItem === item;
                          return (
                            <button
                              key={item}
                              className={`subitem-btn ${isActive ? "active-sub" : ""}`}
                              onClick={() => handleItemClick(id, item, href)}
                              style={{ animationDelay: `${index * 0.05}s` }}
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
          </>
        )}

        {/* ✨ افکت‌ها و انیمیشن‌ها */}
        <style jsx>{`
          .custom-sidebar-link {
            font-size: 0.95rem;
            color: white;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .custom-sidebar-link::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(90deg, #2081c3, #00b7ff);
            transition: width 0.35s ease-in-out;
          }

          .custom-sidebar-link:hover::after {
            width: 100%;
          }

          .custom-sidebar-link:hover {
            background-color: #04123a;
            color: #9ad0ff;
            transform: translateX(-4px);
          }

          .custom-sidebar-link.active {
            background-color: #051844;
            color: #00b7ff;
          }

          .fade-in {
            animation: fadeIn 0.35s ease-in-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(15px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
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
            transition: all 0.3s ease;
            display: block;
            cursor: pointer;
            position: relative;
            opacity: 0;
            animation: fadeIn 0.4s ease forwards;
          }

          .subitem-btn:hover {
            background-color: #0a1d52;
            color: #9ad0ff;
            box-shadow: 0 0 8px #0d6efd55;
            transform: translateX(-5px);
          }

          .subitem-btn.active-sub {
            background: linear-gradient(90deg, #0d6efd, #2081c3);
            color: white;
            font-weight: 600;
            box-shadow: 0 0 10px #0d6efd88;
          }
        `}</style>
      </aside>
    </>
  );
}
