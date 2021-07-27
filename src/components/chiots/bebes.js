import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  max-width: 48.5%;
  height: 100%;
  border-radius: 1em;
  box-shadow: var(--shadow);
`;

const Text = styled.div`
  text-align: center;
`;

// Markup
const Chiots = ({ children, front, back }) => {
  return (
    <>
      <br />
      <br />
      <Text>{children}</Text>
      <Container>
        <Image src={front} />
        <Image src={back} />
      </Container>
    </>
  );
};

export default Chiots;
