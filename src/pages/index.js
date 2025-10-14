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
          backgroundColor: '#121212',
          color: 'white',
          textAlign: 'center',
          fontFamily: "'Vazir', sans-serif",
        }}
      >
        <h1 id="introduction">👋 به ایران هاستینگ ۲۴ خوش آمدید</h1>
        <p className="lead">ارائه‌دهنده زیرساخت ابری پایدار و سریع در ایران</p>

        <h2 id="cloud" className="mt-5">
          ☁️ فضای ابری
        </h2>
        <p>
          ما با استفاده از تکنولوژی ابری، به شما امکان می‌دهیم تا داده‌های خود را با امنیت بالا ذخیره
          و مدیریت کنید.
        </p>

        <h2 id="pricing" className="mt-5">
          💸 قیمت‌گذاری
        </h2>
        <p>پلن‌های متنوع برای کاربران مختلف از شخصی تا سازمانی با قیمت رقابتی</p>

        <h2 id="support" className="mt-5">
          📞 پشتیبانی
        </h2>
        <p>تیم ما به صورت ۲۴/۷ پاسخگوی سوالات و مشکلات شماست.</p>
      </main>
    </>
  );
}<main
  style={{
    marginRight: '260px',
    marginTop: '56px',
    padding: '40px 30px',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: 'white',
    fontFamily: "'Vazir', sans-serif",
    direction: 'rtl',    // راست‌چین کل محتوا
    textAlign: 'right',  // متن‌ها راست‌چین
  }}
>
  <section id="introduction" className="section-block">
    <h1>👋 به ایران هاستینگ ۲۴ خوش آمدید</h1>
    <p className="lead">ارائه‌دهنده زیرساخت ابری پایدار و سریع در ایران</p>
  </section>

  <hr />

  <section id="cloud" className="section-block">
    <h2>☁️ فضای ابری</h2>
    <p>
      ما با استفاده از تکنولوژی ابری، به شما امکان می‌دهیم تا داده‌های خود را با امنیت بالا ذخیره
      و مدیریت کنید.
    </p>
  </section>

  <hr />

  <section id="pricing" className="section-block">
    <h2>💸 قیمت‌گذاری</h2>
    <p>پلن‌های متنوع برای کاربران مختلف از شخصی تا سازمانی با قیمت رقابتی</p>
  </section>

  <hr />

  <section id="support" className="section-block">
    <h2>📞 پشتیبانی</h2>
    <p>تیم ما به صورت ۲۴/۷ پاسخگوی سوالات و مشکلات شماست.</p>
  </section>
</main>

