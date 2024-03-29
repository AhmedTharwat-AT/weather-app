import { styled } from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-gray-200);
  color: var(--color-gray-800);
  border: none;
  height: 100%;
  padding: 0px 20px;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: var(--border-radius-lg);
  transition: all 0.3s;

  &:hover {
    color: var(--color-gray-200);
    background-color: var(--color-gray-800);
  }
`;

export default Button;
