import React from 'react';
import SidebarRight from '../components/SidebarRight';
import NavbarTop from '../components/NavbarTop';

export default function Home() {
  return (
    <>
      <NavbarTop />
      <SidebarRight />
      <main
        style={{
          marginRight: '260px',
          marginTop: '56px', // ارتفاع NavbarTop
          padding: '40px 30px',
          minHeight: '100vh',
          backgroundColor: '#121212', // رنگ بک‌گراند تیره
          color: 'white',  // رنگ متن سفید
          textAlign: 'right',  // راست‌چین کردن متن
          fontFamily: "'Vazir', sans-serif",
          direction: 'rtl',    // راست‌چین کل محتوا
        }}
      >
        <section id="introduction" className="section-block">
          <h1 style={{ color: 'white' }}>👋 به ایران هاستینگ ۲۴ خوش آمدید</h1>
          <p className="lead" style={{ color: 'white' }}>
            ارائه‌دهنده زیرساخت ابری پایدار و سریع در ایران
          </p>
        </section>

        <section id="cloud" className="section-block">
          <h2 style={{ color: 'white' }}>☁️ فضای ابری</h2>
          <p style={{ color: 'white' }}>
            ما با استفاده از تکنولوژی ابری، به شما امکان می‌دهیم تا داده‌های خود را با امنیت بالا ذخیره
            و مدیریت کنید.
          </p>
        </section>

        <section id="pricing" className="section-block">
          <h2 style={{ color: 'white' }}>💸 قیمت‌گذاری</h2>
          <p style={{ color: 'white' }}>
            پلن‌های متنوع برای کاربران مختلف از شخصی تا سازمانی با قیمت رقابتی
          </p>
        </section>

        <section id="support" className="section-block">
          <h2 style={{ color: 'white' }}>📞 پشتیبانی</h2>
          <p style={{ color: 'white' }}>
            تیم ما به صورت ۲۴/۷ پاسخگوی سوالات و مشکلات شماست.
          </p>
        </section>
      </main>
    </>
  );
}
