import { styled } from "styled-components";
import { RiCelsiusFill } from "react-icons/ri";
import { BsThermometerHalf } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import { FaWind } from "react-icons/fa";

type Props = {
  data: any;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  gap: 8px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.div`
  display: flex;
`;

function MainStats({ data }: Props) {
  return (
    <Wrapper>
      <Stat>
        <Icon>
          <BsThermometerHalf />
        </Icon>
        <Text>
          <p>Feels like:</p>
          <span>
            {Math.ceil(data.main.feels_like)}
            <RiCelsiusFill />
          </span>
        </Text>
      </Stat>
      <Stat>
        <Icon>
          <BsDroplet />
        </Icon>
        <Text>
          <p>Humidity:</p>
          {Math.ceil(data.main.humidity)}%
        </Text>
      </Stat>
      <Stat>
        <Icon>
          <FaWind />
        </Icon>
        <Text>
          <p>Wind:</p>
          {Math.ceil(data.wind.speed)} km/h
        </Text>
      </Stat>
    </Wrapper>
  );
}

export default MainStats;
