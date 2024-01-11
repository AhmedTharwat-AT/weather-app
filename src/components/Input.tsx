import { styled } from "styled-components";

const Input = styled.input`
  padding: 1rem 2.5rem;
  font-size: 1.3rem;
  padding-right: 11rem;
  height: 100%;
  width: 100%;
  border: none;
  color: var(--color-gray-50);
  background-color: var(--color-glass-input);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border-radius: var(--border-radius-lg);

  &:focus {
    outline: none;
  }
`;

export default Input;
