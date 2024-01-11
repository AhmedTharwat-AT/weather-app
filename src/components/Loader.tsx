import { keyframes, styled } from "styled-components";

const animOne = keyframes`
    0% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    33% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
    66% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    100% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
`;

const animeTwo = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }

`;

export const LoaderOne = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #fff;
  box-sizing: border-box;
  animation: ${animOne} 1s linear infinite alternate;
`;

export const LoaderTwo = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animeTwo} 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }
`;
