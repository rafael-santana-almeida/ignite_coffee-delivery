import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  div {
    display: flex;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.875rem;
      line-height: 1.3;
      border-radius: 6px;
      color: ${props => props.theme["purple-dark"]};
      background: ${props => props.theme["purple-light"]};

      padding: 0.625rem 0.5rem;
    }
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
  
  cursor: pointer;
`