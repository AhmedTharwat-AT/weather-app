import { styled } from "styled-components";
import { useWeatherContext } from "../context/WeatherContext";

import { RiCelsiusFill } from "react-icons/ri";
import Heading from "./Heading";
import VisualDetails from "./VisualDetails";

const Unit = styled(RiCelsiusFill)`
  font-size: 3rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 650px) {
    font-size: 3rem;
  }
`;

const TempStyle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: fit-content;
`;

const Status = styled.div`
  font-size: 1.7rem;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 650px) {
    font-size: 1.6rem;
  }
`;

const DetailsStyle = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

function WeatherDetails() {
  const { weather, isLoadingWeather } = useWeatherContext();

  if (isLoadingWeather || !weather) return <h1>Loading ...</h1>;

  return (
    <DetailsStyle>
      <TempStyle>
        <Heading size="3xl">{Math.ceil(weather.main.temp)}</Heading>
        <div>
          <Unit />
          <Status>{weather.weather[0].description}</Status>
        </div>
      </TempStyle>
      <VisualDetails data={weather} />
    </DetailsStyle>
  );
}

export default WeatherDetails;