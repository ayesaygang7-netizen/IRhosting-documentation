import React, { useState, useEffect } from "react";
import NavbarTop from "../components/NavbarTop";
import SidebarRight from "../components/SidebarRight";
import Footer from "../components/footer";

export default function Documentation() {
  const rightSidebarWidth = 260;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ✅ نوبار بالا */}
      <NavbarTop />

      {/* ✅ سایدبار راست (خودش position: fixed داره، نیازی به aside جدا نیست) */}
      <SidebarRight />

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
          body {
            background-color: #000000;
          }
        }
      `}</style>
    </>
  );
}
