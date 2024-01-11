import { styled } from "styled-components";

import Header from "./Header";
import Container from "./Container";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";

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

const Wrapper = styled.main`
  background: var(--background) center/cover no-repeat;
  padding: 50px;
  border-radius: 25px;
  min-height: 100%;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    border-radius: 0;
    min-height: 100vh;
  }
`;

function AppLayout() {
  return (
    <LayoutStyle>
      <Container>
        <Wrapper>
          <Header />
          <WeatherDetails />
          <WeatherForecast />
        </Wrapper>
      </Container>
    </LayoutStyle>
  );
}

export default AppLayout;
