import React from "react";

const Qualification = () => {
  return (
    <div>
      <h2>مؤهلاتي</h2>
      <li>
        <h3> بكلولريوس هندسة حاسوب</h3>
        <a
          style={{ textDecoration: "none", color: "teal" }}
          href="http://www.bau.edu.jo"
          target="_blank"
          rel="noreferrer"
        >
          <p>جامعة البلقاء التطبيقية</p>
        </a>
      </li>
      <hr />
      <li>
        <h3> مطور مواقع و مختص كلاود</h3>
        <p>يوديمي</p>
      </li>
    </div>
  );
};

export default Qualification;
