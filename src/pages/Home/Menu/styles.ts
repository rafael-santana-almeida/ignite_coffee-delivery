import styled from "styled-components";

export const MenuContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 9.8125rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }
`;

export const MenuList = styled.ul`
  margin-top: 3.375rem;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  row-gap: 2.5rem;
`;

export const MenuItem = styled.li`
  background: ${props => props.theme['base-card']};
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -2.75rem;
    height: 7.5rem;
    width: 7.5rem;
  }

  h3 {
    margin-top: 1rem;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  p {
    color: ${props => props.theme['base-label']};
    margin-top: 0.5rem;    
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    display: block;

    margin-top: 0.75rem;
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.3;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 2.0625rem;

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;

    strong {
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }

  div {
    display: flex;
    gap: 0.5rem;

    div {
      color: ${props => props.theme['base-text']};
      background: ${props => props.theme['base-button']};
      padding: 0.5rem;
      border-radius: 6px;

      svg {
        cursor: pointer;
        color: ${props => props.theme.purple};
        transition: color 0.2s;

        &:hover {
          color: ${props => props.theme['purple-dark']};
        }
      }
    }
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme["base-card"]};
  
  cursor: pointer;
`;