import React from "react";
import Text from "../Text";

import styles from "./styles";

const Button = ({ text, disabled, loading, onPress, style, textStyle}) => {
  return (
    <button
      style={{...styles.default, ...styles.disabled, ...style}}
      onClick={onPress}
      disabled={disabled || loading}
    >
      {text ? <Text style={textStyle}>{text}</Text> : null}
    </button>
  );
};

export default Button;
