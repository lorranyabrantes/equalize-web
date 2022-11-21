import React from "react";

import iconLeftArrow from "../../assets/png/icon-left-arrow.png";

import Text from "../Text";

import styles from "./styles";

const Header = ({ pageTitle, goBack }) => {
  return (
    <div style={styles.container}>
      {goBack ? (
        <button
          testID="go-back-button"
          style={styles.button}
          onClick={goBack}
        >
          <img alt="" style={styles.icon} source={iconLeftArrow} />
        </button>
      ) : null}
      <Text style={styles.title}>{pageTitle}</Text>
    </div>
  );
};

export default Header;
