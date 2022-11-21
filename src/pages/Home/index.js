import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Text from "../../components/Text";

import styles from "./styles";

const Home = ({  user }) => {
  const navigate = useNavigate();

  const goToForm = () => navigate("/form");

  const currentUser = user?.user?.[0];

  return (
    <Container pageTitle={"EQUALIZE"}>
      <div style={styles.Card2}>
        <button style={styles.Card}>
          <Text style={styles.Card2Text}>Dados pessoais</Text>
          <Text style={styles.Card3Text}>Nome: {currentUser?.name}</Text>
          <Text style={styles.Card3Text}>Cargo: {currentUser?.profession}</Text>
        </button>
      </div>
      <div style={styles.Card2}>
        <button style={styles.Card}>
          <Text style={styles.Card2Text}>Dados da empresa</Text>
          <Text style={styles.Card3Text}>
            Nome: {currentUser?.company?.name}
          </Text>
          <Text style={styles.Card3Text}>
            Email: {currentUser?.company?.email}
          </Text>
        </button>
      </div>
      <div style={styles.Card}>
        <button style={styles.Card}>
          <Text style={styles.cardText}>Engajamento Individual</Text>
          <Text style={styles.cardRating}>{currentUser?.engagement}</Text>
        </button>
      </div>
      <div style={styles.content}>
        <Text style={styles.text}>
          Você tem um novo formulário para responder
        </Text>
        <Button
          onPress={goToForm}
          style={styles.botao}
          textStyle={styles.textButton}
          text={"Ambiente de Trabalho"}
        ></Button>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(Home);
