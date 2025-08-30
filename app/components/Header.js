"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ bgColor = "#edfcfc" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // state برای دیالوگ
  const [menuOpen, setMenuOpen] = useState(false); // state برای منو همبرگر
  const [phone, setPhone] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // نمونه داده‌های تستی برای autocomplete
  const allPhones = [
    "19350000001",
    "220000002",
    "3920000003",
    "4121112222",
    "5923334444",
    "623334444",
    "723334444",
    "823334444",
    "923334444",
  "023334444",
  ];

  useEffect(() => {
    if (phone === "") {
      setSuggestions([]);
    } else {
      const filtered = allPhones.filter((p) => p.includes(phone));
      setSuggestions(filtered);
    }
  }, [phone]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.header} ${isOpen ? styles.open : ""}`}
      style={{ "--header-bg": bgColor }}
    >
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="لوگو" />
      </div>

      {/* همبرگر */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      {/* منو */}
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <ul>
          <li><Link href="/">صفحه اصلی</Link></li>
          <li><Link href="/learn">آموزش کار با پنل</Link></li>
          <li><Link href="/about">درباره‌ی ما</Link></li>
          <li><Link href="/learn">محتوا آموزشی</Link></li>
        </ul>

        <button className="sabt" onClick={() => setShowDialog(true)}>
          <span>ورود یا ثبت نام</span>
        </button>
        <button className="hemayat" onClick={() => setShowDialog(true)}>
          <span>حمایت</span></button>
      </nav>

      {/* دیالوگ‌باکس */}
      {showDialog && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h2>ورود یا ثبت نام</h2>
            <p>شماره داوطلبی</p>
            <input className={styles.input}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="شماره خود را وارد کنید"
            />

            {/* کادر پیشنهاد شماره */}
            {suggestions.length > 0 && (
              <div className={styles.suggestions}>
                {suggestions.map((s) => (
                  <div
                    key={s}
                    className={styles.suggestionItem}
                    onClick={() => setPhone(s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}

            <button
              className={styles.close}
              onClick={() => setShowDialog(false)}
            >
              بستن
            </button>
          </div>
        </div>
      )}
    
    </div>
  );
}
