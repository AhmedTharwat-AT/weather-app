import { styled } from "styled-components";
import MainStats from "./MainStats";
import WeatherIcon from "./WeatherIcon";

interface Props {
  data: any;
}

const VisualStyle = styled.div`
  display: flex;
  align-items: center;

  /* flex-wrap: wrap; */
`;

function VisualDetails({ data }: Props) {
  return (
    <VisualStyle>
      <WeatherIcon icon={data.weather[0].icon} size="4x" />
      <MainStats data={data} />
    </VisualStyle>
  );
}

export default VisualDetails;
