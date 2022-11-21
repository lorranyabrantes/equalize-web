import React from "react";

import { Link } from "react-router-dom";

import styles from "./styles";

const Menu = () => {
  return (
    <nav>
    <ul style={styles.container}>
      <li style={styles.item}>
        <Link to={'/home'}>Home</Link>
      </li>
      <li>
        <Link to={'/form'}>Form</Link>
      </li>
    </ul>
  </nav>
  );
};

export default Menu;
