import React from "react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        {/* <div>
          <img
            src="/logo.svg"
            alt="Coders United logo"
            className={styles.logo}
          />
          <h1>Covid-Know</h1>
        </div> */}
        <div className={styles["nav-actions"]}></div>
      </nav>
    </header>
  );
};
