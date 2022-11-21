import React from "react";

import styles from "./styles";

const CardList = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

export default CardList;
