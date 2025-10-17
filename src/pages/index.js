import React from "react";
import NavbarTop from "../components/NavbarTop";
import SidebarRight from "../components/SidebarRight";
import Footer from "../components/footer";

export default function Documentation() {
  const rightSidebarWidth = 260;

  return (
    <>
      <NavbarTop />

      {/* ✅ سایدبار راست ثابت بالا */}
      <SidebarRight
        style={{
          position: "fixed",
          top: "56px",
          right: 0,
          height: "calc(100vh - 56px)",
          width: `${rightSidebarWidth}px`,
          backgroundColor: "#0B0F1A",
          borderLeft: "1px solid #050a13",
          overflowY: "auto",
          zIndex: 1000,
        }}
      />

      {/* ✅ محتوای اصلی */}
      <main
        style={{
          marginRight: `${rightSidebarWidth}px`,
          padding: "100px 40px 100px 40px",
          minHeight: "100vh",
          backgroundColor: "#000000",
          color: "white",
          textAlign: "right",
          fontFamily: "'Vazir', sans-serif",
          direction: "rtl",
        }}
      >
        <h4
          style={{
            color: "#2081c3",
            fontSize: "2.1rem",
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

      {/* پس‌زمینه کلی */}
      <style jsx global>{`
        body {
          background-color: #000000;
          overflow-x: hidden;
        }
      `}</style>

      {/* ✅ واکنش‌گرا */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            margin-right: 0;
            padding: 80px 20px 60px 20px;
          }
        }
      `}</style>
    </>
  );
}
