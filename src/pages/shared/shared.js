import React from "react";
import { Outlet } from "react-router-dom";

function SharedPageLayout() {
  return (
    <div>
      <header>
        {" "}
        <nav>
          <ul>
            <li>
              {" "}
              <a href="/"> Home </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="/dashboard"> Dashboard </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="/train"> Train </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="/label"> Label </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="/detection"> Detection </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="/contact"> Contact Us </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
      </header>{" "}
      <main>
        {" "}
        <Outlet /> {/* This will render the matched nested route component */}{" "}
      </main>{" "}
      <footer>
        {" "}
        {/* Footer content */} <p> ©2024 Your Website </p>{" "}
      </footer>{" "}
    </div>
  );
}

export default SharedPageLayout;
