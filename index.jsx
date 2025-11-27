import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="logo">
        <div className="resource" />
      </div>
      <div className="frame">
        <div className="content">
          <span className="catalog">Каталог</span>
        </div>
        <div className="content-1">
          <span className="solutions">Решения</span>
        </div>
        <div className="content-2">
          <span className="service">Сервис</span>
        </div>
        <div className="content-3">
          <span className="about-us">О нас</span>
        </div>
        <div className="content-4">
          <span className="contacts">Контакты</span>
        </div>
      </div>
    </div>
  );
}
