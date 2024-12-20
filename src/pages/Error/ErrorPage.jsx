import React from "react";
import styles from "./ErrorPageStyles.module.css";
import { Link } from "react-router-dom";
import click from "../../assets/click.png";

const ErrorPage = () => {
  console.log("errorpagee");
  return (
    <div className={styles.errorcontainer}>
      <h1 className={styles.errortext}>Error 404</h1>
      <Link to="/">
        <button className={styles.errorbutton}>
          <p>Go to the home page</p>
          <img src={click} alt="Click" />
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
