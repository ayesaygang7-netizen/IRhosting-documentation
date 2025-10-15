import React, { useState } from 'react';
import SidebarRight from '../components/SidebarRight';
import NavbarTop from '../components/NavbarTop';

const ToggleSection = ({ section, showText, toggleText, title, description, extraText }) => {
  return (
    <section id={section} className="section-block">
      <h2 style={{ color: 'white' }}>{title}</h2>
      <p style={{ color: 'white' }}>{description}</p>
      <button
        onClick={() => toggleText(section)}
        style={{
          backgroundColor: '#333333', // رنگ دکمه مشکی تیره
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
          marginTop: '10px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#444444'} // رنگ روی هاور
        onMouseLeave={(e) => e.target.style.backgroundColor = '#333333'} // بازگشت به رنگ اولیه
      >
        {showText[section] ? 'نمایش کمتر' : 'توضیحات بیشتر'}
      </button>
      {showText[section] && (
        <p style={{ color: 'white', animation: 'fadeIn 0.5s ease' }}>
          {extraText}
        </p>
      )}
    </section>
  );
};

export default function Home() {
  const [showText, setShowText] = useState({
    cloud: false,
    dedicatedServer: false,
    support: false,
    cloudSpace: false, // اضافه کردن بخش فضای ابری
  });

  const toggleText = (section) => {
    setShowText((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <NavbarTop />
      <SidebarRight />
      <main
        style={{
          marginRight: '260px',
          marginTop: '56px',
          padding: '40px 30px',
          minHeight: '100vh',
          backgroundColor: '#000000', // رنگ پس‌زمینه مشکی
          color: 'white',
          textAlign: 'right',
          fontFamily: "'Vazir', sans-serif",
          direction: 'rtl',
        }}
      >
       
        {/* بخش خوش آمد گویی بدون دکمه */}
        <section id="introduction" className="section-block">
          <h1 style={{ color: 'white' }}>👋 به ایران هاستینگ ۲۴ خوش آمدید</h1>
          <p className="lead" style={{ color: 'white' }}>
            ارائه‌دهنده زیرساخت ابری پایدار و سریع در ایران
          </p>
          <p style={{ color: 'white' }}>
            در ایران هاستینگ ۲۴، ما به کسب‌وکارها و سازمان‌ها کمک می‌کنیم تا با استفاده از تکنولوژی‌های پیشرفته، زیرساخت‌های ابری و سرورهای اختصاصی را برای پروژه‌هایشان فراهم کنند.
          </p>
        </section>
         {/* بخش فضای ابری (بالای پشتیبانی) */}
        <section id="cloudSpace" className="section-block">
          <h2 style={{ color: 'white' }}>☁️ فضای ابری</h2>
          <p style={{ color: 'white' }}>
            ارائه خدمات فضای ابری با عملکرد بالا و مقیاس‌پذیری نامحدود برای تمامی نیازهای شما.
          </p>
          <button
            onClick={() => toggleText('cloudSpace')}
            style={{
              backgroundColor: '#333333',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#444444'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#333333'}
          >
            {showText.cloudSpace ? 'نمایش کمتر' : 'توضیحات بیشتر'}
          </button>
          {showText.cloudSpace && (
            <p style={{ color: 'white', animation: 'fadeIn 0.5s ease' }}>
              فضای ابری ما برای کسب‌وکارها و سازمان‌ها به‌طور خاص طراحی شده است تا شما بتوانید به راحتی منابع مورد نیاز خود را مدیریت کنید. از ذخیره‌سازی و پردازش داده‌ها تا ایجاد زیرساخت‌های مقیاس‌پذیر، تمامی این امکانات را در اختیار شما قرار می‌دهیم.
            </p>
          )}
        </section>


        {/* بخش‌های دیگر */}
        <ToggleSection
          section="cloud"
          showText={showText}
          toggleText={toggleText}
          title="☁️ سرور ابری"
          description="سرورهای ابری به شما این امکان را می‌دهند که منابع پردازشی، حافظه و ذخیره‌سازی را بر اساس نیازهای واقعی خود مقیاس‌پذیر کنید."
          extraText="سرورهای ابری ما با امکاناتی مانند دسترسی ۲۴/۷، مقیاس‌پذیری نامحدود و پشتیبانی عالی آماده خدمت‌رسانی به شما هستند. ما با استفاده از آخرین تکنولوژی‌ها، از جمله دیتاسنترهای پیشرفته و قابلیت‌های امنیتی بی‌نظیر، به شما این امکان را می‌دهیم که از سرویس‌های ابری با بالاترین سطح کارایی و امنیت بهره‌مند شوید."
        />
        
        <ToggleSection
          section="dedicatedServer"
          showText={showText}
          toggleText={toggleText}
          title="🖥️ سرور اختصاصی"
          description="سرورهای اختصاصی ما برای کسب‌وکارهایی طراحی شده است که نیاز به منابع محاسباتی بسیار بالا و کنترل کامل بر روی سرور خود دارند."
          extraText="سرورهای اختصاصی ما به‌طور کامل قابل تنظیم و شخصی‌سازی هستند و به شما این امکان را می‌دهند که هرگونه نیاز خاص خود را برآورده کنید. همچنین، امنیت این سرورها به‌طور کامل تأمین شده و شما از مدیریت کامل بر روی تمامی جنبه‌های سرور برخوردار خواهید بود."
        />
        
        <ToggleSection
          section="support"
          showText={showText}
          toggleText={toggleText}
          title="📞 پشتیبانی"
          description="تیم پشتیبانی ۲۴/۷ ما آماده پاسخگویی به سوالات و مشکلات شماست."
          extraText="پشتیبانی ما شامل مشاوره فنی، رفع مشکلات و سوالات مربوط به خدمات مختلف است. همچنین، تمامی خدمات پشتیبانی از طریق چندین کانال ارتباطی شامل تلفن، ایمیل و چت آنلاین در دسترس شما قرار دارد."
        />
      </main>

      {/* استایل‌های موبایل */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            margin-right: 0;
            padding: 20px;
          }

          .section-block {
            margin-bottom: 30px;
            padding-bottom: 20px;
          }

          h1, h2 {
            font-size: 1.5rem;
          }

          .lead {
            font-size: 1rem;
          }

          button {
            width: 100%;
            margin-top: 10px;
          }
        }

        /* استایل انیمیشن برای fadeIn */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
