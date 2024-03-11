import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/nav-bar/nav-bar";

function SharedPageLayout() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p> ©2024 Your Website </p>
      </footer>
    </div>
  );
}

export default SharedPageLayout;
