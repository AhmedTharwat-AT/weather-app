import { useQuery } from "react-query";
import { getWeatherIcon } from "../services/weatherApi";
import { css, styled } from "styled-components";

type Props = {
  icon: string;
  size: string;
};

type Styled = {
  size: string;
};

const Img = styled.img<Styled>`
  min-width: 80px;
  margin: -5px;
  ${(props) =>
    props.size == "2x"
      ? css`
          max-width: 80px;
        `
      : ""}/* margin: -4px; */
`;

function WeatherIcon({ icon, size }: Props) {
  const { data: { img } = {}, isLoading } = useQuery(["icon", icon, size], () =>
    getWeatherIcon(icon, size)
  );

  if (isLoading) return <h1>img loading</h1>;

  return (
    <div>
      <Img src={img} size={size} />
    </div>
  );
}

export default WeatherIcon;
