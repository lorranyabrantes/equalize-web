import React from "react";
import styles from "./styles";

const Text = ({ children, style }) => {
  return <span style={{...styles.text, ...style}}>{children}</span>;
};

export default Text;
