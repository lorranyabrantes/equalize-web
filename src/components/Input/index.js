import React, { useState, useCallback, useEffect } from "react";

import styles from "./styles";

const Input = ({ onChangeText, value, style, placeholder, password }) => {
  const [text, setText] = useState(value);

  const changeText = useCallback(
    (newText) => {
      setText(newText);
      onChangeText(newText);
    },
    [text, onChangeText]
  );

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <input
      testID={"seach-input"}
      style={{...styles.input, ...style}}
      placeholder={placeholder}
      onChangeText={(value) => changeText(value)}
      value={text}
      secureTextEntry={password}
    />
  );
};

export default Input;
