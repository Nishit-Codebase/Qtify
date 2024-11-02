import React from "react";
import { Link } from "react-router-dom";
// import Buttons from "../Button/Buttons";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Buttons from "../Button/Button";


// searchData as a prop 

function Navbar({searchData}) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles["search-container"]}>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      </div>
      <Buttons />
    </nav>
  );
}

export default Navbar;
