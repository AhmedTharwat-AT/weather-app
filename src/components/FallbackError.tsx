import { FallbackProps } from "react-error-boundary";
import { styled } from "styled-components";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    color: var(--color-brand-500);
  }

  & p {
    font-weight: bold;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
    color: var(--color-red-700);
    word-break: break-all;
  }
`;

const Button = styled.button`
  background-color: var(--color-brand-500);
  border: none;
  padding: 7px 12px;
  border-radius: 4px;
`;

function FallbackError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <StyledErrorFallback>
      <Box>
        <h1>Something went wrong 😢</h1>
        <p>{error.message}</p>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </Box>
    </StyledErrorFallback>
  );
}

export default FallbackError;
