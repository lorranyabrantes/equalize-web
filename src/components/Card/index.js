import React from "react";

import Button from "../Button";
import Text from "../Text";

import styles from "./styles";

const Card = ({ image, name, onPressButton }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {image ? (
          <img
            style={styles.image}
            src={image}
            alt=''
          />
        ) : null}

        <Text style={styles.name}>{name}</Text>
        <Button text={"detalhes"} onPress={onPressButton} />
      </div>
    </div>
  );
};

export default Card;
