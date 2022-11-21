import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toast } from 'react-toastify'


import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Input from "../../components/Input";

import equalizeApi from "../../services/network/equalizeApi";
import { addUser } from "../../services/actions";

import styles from "./styles";

const GET_BY_EMAIL = "https://fiap-equalize.herokuapp.com/employee?email=";

const Login = ({ navigation, addUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const goToForm = () => {
    if (email === "") {
      toast.error("Ops... Coloque seu email!");

      return;
    }

    setIsLoading(true);

    equalizeApi.get(`${GET_BY_EMAIL}${email}`, (response) => {
      setIsLoading(false);
      const { password: senha } = response.data;

      if (senha === password) {
        navigation.navigate("TabNavigator");

        addUser(response.data);

        toast.success("Uhul... Login efetuado com sucesso!");

        setEmail("");
        setPassword("");
        return;
      }

      setPassword("");

      toast.error("Ops... Senha incorreta!");
    });
  };

  return (
    <Container pageTitle={"login"}>
      <div>
        <Text style={styles.text}>EQUALIZE</Text>
        <Input
          testID={"seach-input"}
          style={styles.input}
          placeholder="Endereço de e-mail"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          testID={"seach-input"}
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(value) => setPassword(value)}
          password={true}
        />
        {isLoading && <Text>Carregando...</Text>}
        <div style={styles.button}>
          <Button onPress={goToForm} text={"ENTRAR"} />
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
