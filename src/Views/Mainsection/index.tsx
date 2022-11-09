import React from "react";
import { Container, Header, List, Section } from "./styles";
import MenuIcon from "../../assets/menu-icon.svg";

const MainSection = () => {
  return (
    <Container>
      <Header>
        <span>Menu</span>
        <button>
          <img src={MenuIcon} alt="" />
        </button>
      </Header>
      <Section>
        <h2>
          Olá. Eu sou <span>UX/UI Designer</span> e <span>Front-End</span>
        </h2>
        <h4>
          Me chamo Leonam Santana e eu quero criar um design incrível para você.
        </h4>
        <a href="">Vamos trabalhar juntos?</a>
      </Section>
      <List></List>
    </Container>
  );
};

export default MainSection;
