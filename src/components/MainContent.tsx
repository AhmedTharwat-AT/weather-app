import { styled } from "styled-components";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";

const MainStyle = styled.div`
  margin-top: 50px;
`;

function MainContent() {
  return (
    <MainStyle>
      <WeatherDetails />
      <WeatherForecast />
    </MainStyle>
  );
}

export default MainContent;
