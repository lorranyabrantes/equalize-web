import React, { useState, useEffect, useCallback } from "react";

import iconCheck from "../../assets/png/icon-check.png";

import Text from "../Text";

import styles from "./styles";

const Checkbox = ({ text, onToggle, defaultChecked }) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  const toggleChecked = useCallback(() => {
    setChecked(!isChecked);
    onToggle(!isChecked);
  }, [isChecked, onToggle]);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <div style={styles.container}>
      <button
        style={{...styles.button,  ...styles.checked}}
        onClick={toggleChecked}
      >
        <img style={styles.icon} source={iconCheck} alt=''/>
      </button>

      {text ? <Text>{text}</Text> : null}
    </div>
  );
};

export default Checkbox;
