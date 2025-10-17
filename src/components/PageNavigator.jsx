import React, { useEffect, useState } from "react";
import docsPageOrder from "../config/docsPageOrder";

export default function PageNavigator() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  // 📍 نگاشت مسیرها به نام فارسی
  const titleMap = {
    "/cloud-server/manage-server": "مدیریت سرور",
    "/cloud-server/connect-server": "اتصال به سرور",
    "/cloud-server/buy-server": "نحوه خرید سرور",

    "/cloud/manage-disk": "مدیریت دیسک",
    "/cloud/connect-server": "اتصال به سرور",
    "/cloud/create-server": "خرید و ساخت سرور",

    "/cloud-sakhtar/security": "امنیت",
    "/cloud-sakhtar/troubleshooting": "عیب‌یابی",
    "/cloud-sakhtar/domain": "دامنه",

    "/support/chat": "چت",
    "/support/contact": "تماس",
  };

  useEffect(() => {
    setCurrentPath(window?.location?.pathname || "");
  }, []);

  const currentIndex = docsPageOrder.indexOf(currentPath);
  const prevPage = currentIndex > 0 ? docsPageOrder[currentIndex - 1] : null;
  const nextPage =
    currentIndex >= 0 && currentIndex < docsPageOrder.length - 1
      ? docsPageOrder[currentIndex + 1]
      : null;

  const goToPage = (url) => {
    if (url) window.location.href = url;
  };

  // ✅ تشخیص رسیدن به انتهای صفحه
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      setIsAtBottom(scrollY >= pageHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!isAtBottom) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        left: "250px",
        right: "280px",
        backgroundColor: "#071025",
        border: "1px solid rgba(30,58,138,0.25)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        height: "80px",
        color: "white",
        fontFamily: "'Vazir', sans-serif",
        boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
        zIndex: 1200,
      }}
    >
      {/* 👈 بخش قبلی */}
      <div style={{ textAlign: "center", width: "30%" }}>
        <button
          onClick={() => goToPage(prevPage)}
          disabled={!prevPage}
          style={{
            backgroundColor: prevPage ? "#0f1724" : "transparent",
            color: prevPage ? "#7fb0ff" : "#6b7280",
            border: prevPage
              ? "1px solid rgba(30,58,138,0.4)"
              : "1px solid transparent",
            borderRadius: "8px",
            padding: "8px 14px",
            fontSize: "0.95rem",
            cursor: prevPage ? "pointer" : "not-allowed",
            transition: "all 0.3s ease",
          }}
        >
          « قبلی
        </button>
        {prevPage && (
          <div style={{ fontSize: "0.8rem", color: "#9AD0FF", marginTop: "6px" }}>
            {titleMap[prevPage]}
          </div>
        )}
      </div>

      {/* 🧭 وسط: اسم صفحه فعلی */}
      <div
        style={{
          textAlign: "center",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#9AD0FF",
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "5px",
          }}
        >
          {titleMap[currentPath] || "صفحه جاری"}
        </span>
        <span style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>مستندات</span>
      </div>

      {/* 👉 بخش بعدی */}
      <div style={{ textAlign: "center", width: "30%" }}>
        <button
          onClick={() => goToPage(nextPage)}
          disabled={!nextPage}
          style={{
            backgroundColor: nextPage ? "#0f1724" : "transparent",
            color: nextPage ? "#7fb0ff" : "#6b7280",
            border: nextPage
              ? "1px solid rgba(30,58,138,0.4)"
              : "1px solid transparent",
            borderRadius: "8px",
            padding: "8px 14px",
            fontSize: "0.95rem",
            cursor: nextPage ? "pointer" : "not-allowed",
            transition: "all 0.3s ease",
          }}
        >
          بعدی »
        </button>
        {nextPage && (
          <div style={{ fontSize: "0.8rem", color: "#9AD0FF", marginTop: "6px" }}>
            {titleMap[nextPage]}
          </div>
        )}
      </div>
    </div>
  );
}
