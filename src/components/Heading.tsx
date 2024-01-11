import { css, styled } from "styled-components";

interface Head {
  size?: "default" | "2xl" | "3xl";
}

const sizes = {
  default: css`
    letter-spacing: 2px;
    margin-bottom: 5px;
    font-size: 3rem;

    @media (max-width: 650px) {
      font-size: 2rem;
    }
  `,
  "2xl": css`
    font-size: 5rem;
    letter-spacing: 3px;
  `,
  "3xl": css`
    font-size: 10rem;
    letter-spacing: 3px;
    font-weight: 500;
    margin: 0;
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 9rem;
    }
    @media (max-width: 650px) {
      font-size: 9rem;
    }
  `,
};

const Heading = styled.h1<Head>`
  letter-spacing: 2px;
  margin-bottom: 5px;
  font-weight: 600;

  ${(props) => {
    if (!props.size) return sizes["default"];
    return sizes[props.size];
  }}
`;

export default Heading;
