import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: 0px;
  margin: 0 auto;

  @media screen and (min-width: 650px) {
    /* Small devices (phones) */
    max-width: 640px;
    padding: 20px;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    /* Medium devices (tablets) */
    max-width: 780px;
  }

  @media screen and (min-width: 992px) {
    /* Large devices (desktops) */
    max-width: 960px;
  }

  @media screen and (min-width: 1200px) {
    /* Extra large devices (large desktops) */
    max-width: 1140px;
  }
`;

export default Container;
