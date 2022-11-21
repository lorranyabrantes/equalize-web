import React from "react";

import styles from "./styles";

const Input = ({ value, onChangeText, style, placeholder, password }) => {
  return (
    <input
      value={value}
      type={password ? "password" : 'text'}
      style={{...styles.input, ...style}}
      placeholder={placeholder}
      onChange={(e) => onChangeText(e.target.value)}
    />
  );
};

export default Input;
