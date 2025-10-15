import React from 'react';
import NavbarTop from '../components/NavbarTop';
import SidebarRight from '../components/SidebarRight';

export default function Documentation() {
  return (
    <>
      <NavbarTop />
      <SidebarRight />
      <main
        style={{
          marginRight: '260px',
          padding: '100px 30px 40px 30px', // از بالا padding به جای margin
          minHeight: '100vh',
          backgroundColor: '#000000',
          color: 'white',
          textAlign: 'right',
          fontFamily: "'Vazir', sans-serif",
          direction: 'rtl',
        }}
      >
        <h1
          style={{
            color: '#2081c3',
            fontSize: '1.5rem',
            marginBottom: '25px',
          }}
        >
          مستندات ایران هاستینگ 24
        </h1>

        <section className="section-block">
          <p
            style={{
              color: 'white',
              fontSize: '0.95rem',
              lineHeight: '1.8',
              marginBottom: '15px',
            }}
          >
            فضای ابری ایران هاستینگ ۲۴ به شما این امکان را می‌دهد که منابع پردازشی، ذخیره‌سازی و شبکه‌ای خود را به صورت انعطاف‌پذیر و مقیاس‌پذیر مدیریت کنید...
          </p>
          <p
            style={{
              color: 'white',
              fontSize: '0.95rem',
              lineHeight: '1.8',
            }}
          >
            این سرویس برای سازمان‌ها، توسعه‌دهندگان و شرکت‌هایی که به پایداری، سرعت و امنیت بالا نیاز دارند طراحی شده است...
          </p>
        </section>
      </main>

      {/* رنگ کل پس‌زمینه صفحه برای جلوگیری از تکه‌شدن */}
      <style jsx global>{`
        body {
          background-color: #000000;
        }
      `}</style>

      {/* استایل موبایل */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            margin-right: 0;
            padding: 80px 20px 20px 20px;
          }

          h1 {
            font-size: 1.25rem;
          }

          p {
            font-size: 0.9rem;
            line-height: 1.7;
          }
        }
      `}</style>
    </>
  );
}
