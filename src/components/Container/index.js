import React from "react";

import Header from "../../components/Header";
import Menu from "../Menu";

import styles from "./styles";

const Container = ({ pageTitle, children, goBack }) => {
  return (
    <div style={styles.container}>
      <Menu />
      <Header pageTitle={pageTitle} goBack={goBack} />
      <div
        style={styles.scroll}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
