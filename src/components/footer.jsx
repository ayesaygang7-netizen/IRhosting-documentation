import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0B1426",
        color: "white",
        fontFamily: "'Vazir', sans-serif",
        padding: "60px 100px 30px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        {/* محصولات */}
        <div>
          <h5 style={{ color: "#38BDF8", marginBottom: "15px" }}>محصولات</h5>
          <ul style={ulStyle}>
            <li>دیتاسنتر ابری</li>
            <li>سرور ابری</li>
            <li>شبکه توزیع محتوا (CDN)</li>
            <li>امنیت ابری</li>
            <li>DNS ابری</li>
            <li>PAM ابری</li>
          </ul>
        </div>

        {/* راهکارها */}
        <div>
          <h5 style={{ color: "#38BDF8", marginBottom: "15px" }}>راهکارها</h5>
          <ul style={ulStyle}>
            <li>مهاجرت ابری</li>
            <li>ابر خصوصی</li>
            <li>ابر ترکیبی</li>
            <li>سرور اختصاصی</li>
            <li>کولوکیشن</li>
            <li>ابر ایزوله</li>
            <li>سرویس‌های مدیریت شده</li>
            <li>راهکارهای سازمانی</li>
            <li>راهکار بکاپ</li>
            <li>مرکز عملیات امنیت (SOC)</li>
          </ul>
        </div>

        {/* قیمت‌ها */}
        <div>
          <h5 style={{ color: "#38BDF8", marginBottom: "15px" }}>قیمت‌ها</h5>
          <ul style={ulStyle}>
            <li>شیوه قیمت‌گذاری</li>
          </ul>
        </div>

        {/* آپالون */}
        <div>
          <h5 style={{ color: "#38BDF8", marginBottom: "15px" }}>ایران هاستینگ 24</h5>
          <ul style={ulStyle}>
            <li>درباره ایران هاستینگ 24</li>
            <li>راهنمای سرویس‌ها</li>
            <li>سطوح خدماتی (SLA)</li>
            <li>شرایط استفاده از خدمات</li>
            <li>سوالات متداول</li>
          </ul>
        </div>

        {/* ارتباطات */}
        <div>
          <h5 style={{ color: "#38BDF8", marginBottom: "15px" }}>ارتباطات</h5>
          <ul style={ulStyle}>
            <li>تماس با ما</li>
            <li>ثبت تیکت</li>
            <li>وبلاگ</li>
            <li>فرصت‌های شغلی</li>
          </ul>
        </div>
      </div>

      {/* خط جداکننده */}
      <hr style={{ borderColor: "#1E293B", marginBottom: "30px" }} />

      {/* شبکه‌های اجتماعی */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <SocialIcon Icon={FaInstagram} />
        <SocialIcon Icon={FaLinkedinIn} />
        <SocialIcon Icon={FaYoutube} />
        <SocialIcon Icon={FaTelegramPlane} />
      </div>

      {/* آدرس شرکت */}
      <div style={{ textAlign: "center", fontSize: "0.9rem", color: "#93C5FD" }}>
        <p>© تمامی حقوق مادی و معنوی این سایت متعلق به شرکت ایران هاستینگ 24 است.</p>
        <p style={{ marginTop: "8px" }}>  </p>
      </div>
    </footer>
  );
}

// ✅ استایل لیست‌ها
const ulStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  lineHeight: "1.9",
  color: "#E5E7EB",
  fontSize: "0.9rem",
};

// ✅ کامپوننت آیکون شبکه اجتماعی
const SocialIcon = ({ Icon }) => (
  <div
    style={{
      backgroundColor: "#06B6D4",
      borderRadius: "50%",
      width: "42px",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
  >
    <Icon color="white" size={20} />
  </div>
);
