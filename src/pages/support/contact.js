import React, { useEffect, useState } from 'react';
import NavbarTop from '../../components/NavbarTop';
import SidebarRight from '../../components/SidebarRight';
import docsPageOrder from '../../config/docsPageOrder';

const leftSidebarWidth = 220;
const rightSidebarWidth = 260;

export default function Security() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [currentPath, setCurrentPath] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const pageOrder = docsPageOrder;

  useEffect(() => {
    setCurrentPath(window?.location?.pathname || null);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentIndex = currentPath ? pageOrder.indexOf(currentPath) : -1;
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const nextPage =
    currentIndex >= 0 && currentIndex < pageOrder.length - 1
      ? pageOrder[currentIndex + 1]
      : null;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      setIsAtBottom(scrollY >= pageHeight - 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToPage = (url) => {
    if (url) window.location.href = url;
  };

  const getPageName = (path) => {
    if (!path) return '';
    const parts = path.split('/');
    return parts[parts.length - 1].replace('.js', '').replace(/-/g, ' ');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <NavbarTop />
      <SidebarRight />

      {/* ✅ سایدبار چپ فقط در حالت دسکتاپ */}
      {!isMobile && (
        <aside
          style={{
            position: 'fixed',
            top: '56px',
            left: 0,
            height: 'calc(100vh - 56px)',
            width: `${leftSidebarWidth}px`,
            backgroundColor: '#0f121a',
            borderRight: '1px solid #0f121a',
            padding: '20px 15px',
            color: 'white',
            fontFamily: "'Vazir', sans-serif",
            fontSize: '0.85rem',
            textAlign: 'right',
            direction: 'rtl',
            overflowY: 'auto',
            zIndex: 1000,
          }}
        >
          {/* <h6 style={{ color: '#9AD0FF', textAlign: 'center', marginBottom: '12px' }}>
            فهرست امنیت
          </h6> */}
          <ul className="left-sidebar-list">
            <li onClick={() => scrollToSection('security-intro')}>مقدمه</li>
            <li onClick={() => scrollToSection('security-measures')}>اقدامات امنیتی</li>
            <li onClick={() => scrollToSection('security-user')}>مسئولیت کاربر</li>
          </ul>

          {/* 🎨 استایل hover حرفه‌ای */}
          <style jsx>{`
            .left-sidebar-list {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .left-sidebar-list li {
              color: #ffffff;
              padding: 6px 8px;
              cursor: pointer;
              position: relative;
              transition: all 0.3s ease;
            }
            .left-sidebar-list li::before {
              content: '';
              position: absolute;
              right: 0;
              top: 0;
              height: 100%;
              width: 3px;
              background-color: transparent;
              transition: all 0.3s ease;
              border-radius: 3px;
            }
            .left-sidebar-list li:hover {
              color: #5c87f4;
              transform: translateX(-4px);
            }
            .left-sidebar-list li:hover::before {
              background-color: #5c87f4;
            }
          `}</style>
        </aside>
      )}

      {/* ✅ محتوای اصلی */}
      <main
        style={{
          marginRight: isMobile ? '0' : `${rightSidebarWidth}px`,
          marginLeft: isMobile ? '0' : `${leftSidebarWidth}px`,
          padding: isMobile ? '80px 20px 160px 20px' : '80px 40px 180px 40px',
          backgroundColor: '#0F121A',
          color: 'white',
          minHeight: '100vh',
          fontFamily: "'Vazir', sans-serif",
          direction: 'rtl',
          textAlign: 'right',
        }}
      >
        {/* ✅ رودبرد */}
        <div
          style={{
            color: '#9AD0FF',
            marginBottom: '30px',
            fontSize: '0.9rem',
            backgroundColor: '#0f121a',
            padding: '10px 20px',
            borderRadius: '8px',
            display: 'inline-block',
            boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
          }}
        >
          <span style={breadcrumbLink} onClick={() => goToPage('/')}>
            خانه
          </span>
          {' / '}
          <span style={{ ...breadcrumbLink, color: '#fff', cursor: 'default' }}>
پشتیبانی                    </span>
          {' / '}
          <span style={{ ...breadcrumbLink, color: '#fff', cursor: 'default' }}>
            تماس با
          </span>
        </div>

        {/* 📘 محتوا */}
        <section id="security-intro" style={sectionStyle}>
          <h2 style={titleStyle}>  تماس با ما  </h2>
          <p style={paragraphStyle}>
            امنیت یکی از مهم‌ترین دغدغه‌ها در زیرساخت‌های ابری است...
          </p>
        </section>

        <section id="security-measures" style={sectionStyle}>
          <h3 style={subtitleStyle}>اقدامات امنیتی</h3>
          <p style={paragraphStyle}>
            ما از ترکیبی از روش‌های مدرن امنیتی شامل فایروال‌های هوشمند...
          </p>
          <div style={tipBoxStyle}>
            <h4 style={{ color: '#9AD0FF', marginBottom: '10px' }}>نکته امنیتی</h4>
            <p style={paragraphStyle}>فقط پورت‌های ضروری را باز نگه دارید.</p>
          </div>
        </section>

        <section id="security-user" style={sectionStyle}>
          <h3 style={subtitleStyle}>مسئولیت‌های کاربر</h3>
          <p style={paragraphStyle}>
            کاربران باید رمز عبور قوی و احراز هویت دو مرحله‌ای استفاده کنند.
          </p>
        </section>
      </main>

      {/* ✅ دکمه‌های قبلی / بعدی */}
      {isAtBottom && (
        <div
          style={{
            ...bottomNavStyle,
            left: isMobile ? '20px' : `${leftSidebarWidth + 30}px`,
            right: isMobile ? '20px' : `${rightSidebarWidth + 30}px`,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => goToPage(prevPage)}
              disabled={!prevPage}
              style={{
                ...navButtonStyle,
                opacity: prevPage ? 1 : 0.4,
                cursor: prevPage ? 'pointer' : 'not-allowed',
              }}
            >
              « قبلی
            </button>
            <div style={{ fontSize: '0.8rem', color: '#9AD0FF', marginTop: '5px' }}>
              {prevPage ? getPageName(prevPage) : ''}
            </div>
          </div>

          <span style={{ color: '#9AD0FF', fontWeight: 600 }}>مستندات — امنیت</span>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => goToPage(nextPage)}
              disabled={!nextPage}
              style={{
                ...navButtonStyle,
                opacity: nextPage ? 1 : 0.4,
                cursor: nextPage ? 'pointer' : 'not-allowed',
              }}
            >
              بعدی »
            </button>
            <div style={{ fontSize: '0.8rem', color: '#9AD0FF', marginTop: '5px' }}>
              {nextPage ? getPageName(nextPage) : ''}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// 🎨 استایل‌ها
const breadcrumbLink = { color: '#9AD0FF', cursor: 'pointer' };
const sectionStyle = { maxWidth: '900px', margin: '0 auto 60px auto' };
const titleStyle = { fontSize: '2rem', color: '#5C87F4', marginBottom: '20px' };
const subtitleStyle = { fontSize: '1.6rem', color: 'white', marginBottom: '15px' };
const paragraphStyle = { fontSize: '1rem', lineHeight: '1.9', color: '#e5e7eb' };
const tipBoxStyle = {
  backgroundColor: '#123142',
  borderRadius: '12px',
  padding: '18px 20px',
  marginTop: '30px',
  borderRight: '4px solid #5C87F4',
};
const bottomNavStyle = {
  position: 'fixed',
  bottom: '25px',
  backgroundColor: '#071025',
  border: '1px solid rgba(30,58,138,0.25)',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  height: '80px',
  color: 'white',
  fontFamily: "'Vazir', sans-serif",
  boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
  zIndex: 1200,
};
const navButtonStyle = {
  backgroundColor: '#0f1724',
  color: '#7fb0ff',
  border: '1px solid rgba(30,58,138,0.4)',
  borderRadius: '8px',
  padding: '8px 14px',
  fontSize: '0.95rem',
};
