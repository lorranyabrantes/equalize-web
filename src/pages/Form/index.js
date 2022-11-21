import React, { useState } from "react";

import { toast } from 'react-toastify'

import iconAnon from "../../assets/png/icon-anon.png";

import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Container from "../../components/Container";

import styles from "./styles";

const Form = () => {
  
  const [text, setText] = useState("");

  const handleSendButton = () => {
    toast.success("Uhul... Formulário enviado com sucesso!");
    setText("");
  };

  return (
    <Container pageTitle={"Formulário"}>
      <div style={styles.title}>
        <img source={iconAnon} alt=""/>
        <Text style={styles.text}>Anônimo</Text>
      </div>
      <Text style={styles.text}>Ambiente de trabalho</Text>
      <Text style={{...styles.text, ...styles.mainText}}>
        Como você considera{"\n"}seu ambiente de trabalho?
      </Text>
      <div style={styles.search}>
        <Input
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder={"Deixe seu comentário aqui"}
        />
        <Button onPress={handleSendButton} text={"Enviar"}></Button>
      </div>
    </Container>
  );
};

export default Form;
