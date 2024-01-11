import { styled } from "styled-components";
import { getWeekday } from "../utils/helpers";
import WeatherIcon from "./WeatherIcon";
import { RiCelsiusFill } from "react-icons/ri";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-gray-300);
`;

const Temp = styled.div`
  color: var(--color-gray-50);
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 5px;
  font-size: 1.7rem;
`;

const Text = styled.p`
  text-transform: capitalize;
`;

function ForecastItem({ item }: any) {
  return (
    <Wrapper>
      <div>{getWeekday(new Date(item.dt_txt))}</div>
      <WeatherIcon icon={item.weather[0].icon} size="2x" />
      <Temp>
        {Math.ceil(item.main.temp)} <RiCelsiusFill />
      </Temp>
      <Text>{item.weather[0].description}</Text>
    </Wrapper>
  );
}

export default ForecastItem;
