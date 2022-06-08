import styled from "styled-components";

export default function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-radius: 100px;
}
`;
