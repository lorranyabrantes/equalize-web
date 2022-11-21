import React from "react";

import Header from "../../components/Header";

import styles from "./styles";

const Container = ({ pageTitle, children, goBack }) => {
  return (
    <div style={styles.container}>
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
