import { styled } from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-brand-100);
  color: var(--color-brand-900);
  border: none;
  height: 100%;
  padding: 0px 22px;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: var(--border-radius-lg);
`;

export default Button;
