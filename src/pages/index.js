import React, { useState, useEffect } from "react";
import NavbarTop from "../components/NavbarTop";
import SidebarRight from "../components/SidebarRight";
import Footer from "../components/footer";

export default function Documentation() {
  const rightSidebarWidth = 260;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ✅ نوبار بالا */}
      <NavbarTop />

      {/* ✅ سایدبار راست (دسکتاپ همیشه نمایش داده می‌شود) */}
      <aside
        style={{
          position: "fixed",
          top: "56px",
          right: isMobile ? (isSidebarVisible ? "0" : `-${rightSidebarWidth}px`) : "0",
          width: `${rightSidebarWidth}px`,
          height: "calc(100vh - 56px)",
          backgroundColor: "#0B0F1A",
          borderLeft: "1px solid #050a13",
          overflowY: "auto",
          transition: "right 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <SidebarRight />
      </aside>

      {/* ✅ دکمه باز و بسته کردن سایدبار در موبایل */}
      {isMobile && (
        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          style={{
            position: "fixed",
            top: "65px",
            right: "15px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 12px",
            fontSize: "1.3rem",
            zIndex: 1101,
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          ☰
        </button>
      )}

      {/* ✅ محتوای اصلی */}
      <main
        style={{
          marginRight: isMobile ? "0" : `${rightSidebarWidth}px`,
          padding: isMobile ? "90px 20px 80px 20px" : "100px 40px 100px 40px",
          minHeight: "100vh",
          backgroundColor: "#000000",
          color: "white",
          textAlign: "right",
          fontFamily: "'Vazir', sans-serif",
          direction: "rtl",
          transition: "all 0.3s ease",
        }}
      >
        <h4
          style={{
            color: "#00AAFF",
            fontSize: isMobile ? "1.6rem" : "2.1rem",
            marginBottom: "25px",
          }}
        >
          مستندات ایران هاستینگ 24
        </h4>

        <section>
          <p
            style={{
              color: "white",
              fontSize: "0.95rem",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            فضای ابری ایران هاستینگ ۲۴ به شما این امکان را می‌دهد که منابع
            پردازشی، ذخیره‌سازی و شبکه‌ای خود را به صورت انعطاف‌پذیر و
            مقیاس‌پذیر مدیریت کنید...
          </p>
          <p
            style={{
              color: "white",
              fontSize: "0.95rem",
              lineHeight: "1.8",
            }}
          >
            این سرویس برای سازمان‌ها، توسعه‌دهندگان و شرکت‌هایی که به پایداری،
            سرعت و امنیت بالا نیاز دارند طراحی شده است...
          </p>
        </section>
      </main>

      {/* ✅ فوتر پایین صفحه */}
      <Footer />

      {/* ✅ استایل‌های کلی */}
      <style jsx global>{`
        body {
          background-color: #000000;
          overflow-x: hidden;
        }

        @media (max-width: 900px) {
          aside {
            box-shadow: -3px 0 15px rgba(0, 0, 0, 0.6);
          }
        }
      `}</style>
    </>
  );
}
