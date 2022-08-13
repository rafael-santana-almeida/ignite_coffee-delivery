import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
  height: 34rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]}
  }

  p {
    color: ${porps => porps.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 14.4375rem 18.375rem;
  grid-template-rows: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
  width: 36rem;

  div {
    display: flex;
    align-items: center;
    line-height: 1.3;
    gap: 0.75rem;
  }
`;

interface ItemIconProps {
  backgroundColor: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const ItemIcon = styled.span<ItemIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme[props.backgroundColor]};
  color: ${props => props.theme.background};
  padding: 0.5rem;
  border-radius: 50%;
`