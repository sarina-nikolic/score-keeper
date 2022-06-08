import styled from "styled-components";

export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

const Button = styled.button`
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-radius: 100px;
}
`;
