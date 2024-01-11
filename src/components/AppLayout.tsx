import { styled } from "styled-components";

import Header from "./Header";
import MainContent from "./MainContent";
import Container from "./Container";

const LayoutStyle = styled.div`
  background: url("assets/fullpage-bg.png") center/cover no-repeat;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    background: none;
  }
`;

const Wrapper = styled.div`
  background: url("assets/background-night.png") center/cover no-repeat;
  padding: 50px;
  border-radius: 25px;
  min-height: 100%;

  @media (max-width: 650px) {
    padding: 20px;
    border-radius: 0;
  }
`;

function AppLayout() {
  return (
    <LayoutStyle>
      <Container>
        <Wrapper>
          <Header />
          <MainContent />
        </Wrapper>
      </Container>
    </LayoutStyle>
  );
}

export default AppLayout;
