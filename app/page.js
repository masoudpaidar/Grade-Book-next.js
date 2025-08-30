'use client';
import Image from "next/image";
import styles from './page.module.css';
import { useEffect } from 'react';
import { initScrolling } from './script';
import Header from "./components/header";


import Link from "next/link";
export default function Home() {
   useEffect(() => {
    initScrolling();
  }, []);
  return (
    
    <>
    
   <Header bgColor="#edfcfc" />

      <div className="main-first" id="first">
        <div className="main-first-text">
          <h5>دفتر نمره ی آنلاین</h5>
          <h1>نمره هام</h1>
          <p>
            دفتر نمره ی آنلاین <span>نمره هام</span> مکانی امن و نو برای
            معلمان عزیز می باشد تا به راحتی هرچه تمام نمرات دانش
            آموزان خود را ثبت کنند و هم خود و هم والدین دانش آموزان از
            وضعیت تحصیلی دانش آموزان آگاه شوند و به نقاط ضعف و قوت آن
            ها پی ببرند
          </p>
        </div>
        <div className="main-first-img">
          <img src="/images/panel.png" alt="پنل" />
        </div>
      </div>

      <div className="main-second">
        <div className="main-second-img">
          <img src="/images/panel2.png" alt="پنل ۲" />
        </div>
        <div className="main-second-text">
          <div className="main-second-header">
            <h2>امکانات نمره هام</h2>
          </div>
          <div className="main-second-main">
            <div className="dakheli">
              <h3>محیط کلربری جذاب و آسان</h3>
              <p>.در محیط کاملا کاربر پسند می توانید به سادگی کلاس خود را مدیریت کنید</p>
            </div>
            <div className="dakheli">
              <h3>امنیت بالا</h3>
              <p>با خیال راحت و در بستری امن به ثبت و ویرایش نمرات بپردازید</p>
            </div>
            <div className="dakheli">
              <h3>پشتیبانی 24 ساعته</h3>
              <p>در صورت بروز هرگونه مشکل در هر ساعت از شبانه روز با پشتیبانی تماس بگیرید تا مشکل شما را در کوتاه ترین زمان حل کنیم.</p>
            </div>
            <div className="dakheli">
              <h3>بروزرسانی مداوم</h3>
              <p>تیم توسعه سعی بر این دارد برای راحتی معلمان به طور مداوم امکانات جدیدی را به پنل اضافه کند.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="why">
        <h2>چرا نمره هام...؟</h2>
        <div className="panel">
          <div className="kenari">
            <i className="fa fa-th" aria-hidden="true" id="dot"></i>
            <i className="fa fa-user-circle" id="logo"></i>
            <h3>استفاده آسان</h3>
            <p>محیط کاربر پسند نمره هام هر معلمی را به استفاده از آن ترغیب می کند.</p>
          </div>
          <div className="vasati">
            <i className="fa fa-th" aria-hidden="true" id="dot"></i>
            <i className="fa fa-credit-card" aria-hidden="true" id="logo-vasat"></i>
            <h3>استفاده آسان</h3>
            <p>محیط کاربر پسند نمره هام هر معلمی را به استفاده از آن ترغیب می کند.</p>
          </div>
          <div className="kenari">
            <i className="fa fa-th" aria-hidden="true" id="dot"></i>
            <i className="fa fa-phone-square" id="logo"></i>
            <h3>استفاده آسان</h3>
            <p>محیط کاربر پسند نمره هام هر معلمی را به استفاده از آن ترغیب می کند.</p>
          </div>
        </div>
      </div>

      <div className="join">
        <div className="right">
          <h1>همین حالا به جمع معلمان بپیوندید</h1>
          <p>
            برای ثبت سریع نمرات دانش آموزان و تحلیل و بررسی آن ها در یک محیط جذاب و کاربر پسند همین الان اکانت خود را بسازید و شروع کنید.
          </p>
          <button className="hesab"><span>حساب کاربری</span></button>
        </div>
        <div className="left">
          <img src="/images/panel3.png" alt="پنل ۳" />
        </div>
      </div>

      <div className="call">
        <img src="/images/say-shape-right.png" className="back" alt="پس‌زمینه راست" />
        <button className="tamas"><span> تماس با ما</span></button>
        <p>پاسخگوی سوالات شما هستیم؛ با ما در ارتباط باشید :)</p>
        <img src="/images/say-shape-left.png" className="rotate" alt="پس‌زمینه چپ" />
      </div>

      <footer>
        <div className="footer-right">
          <img src="/images/logo.png" alt="لوگو فوتر" />
          <p>
            نمره هام سامانه آنلاین برای معلمان (فعلا ابتدایی) است تا به طور منظم و دقیق عملکرد دانش آموزان خود را ثبت و تحلیل کنند.
            و از طرفی والدین بتوانند از وضعیت لحظه ای دانش آموز خود در کلاس درس آگاه شوند.
          </p>
        </div>
        <div className="help">
          <h3>راهنمای سایت</h3>
          <a>درباره ی ما</a>
          <a>ویژگی ما</a>
          <a>محتوای آموزشی</a>
        </div>
        <div className="logo-footer">
          <h3>لوگوی ساماندهی</h3>
          <img src="/images/logo%20(1).png" alt="لوگو ساماندهی" />
        </div>
      </footer>

      <a href="#first" id="scroll"></a>
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </>
  );
}
