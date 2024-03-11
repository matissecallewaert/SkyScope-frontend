import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/nav-bar/nav-bar";

function SharedPageLayout() {
  return (
    <div>
      <header>
        {" "}
        <NavBar></NavBar>
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
