import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 9.8125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const CompleteYourOrderContainer = styled.section`
  h3 {
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
  }
`;

export const AddressContainer = styled.div`
  margin-top: 1rem;
  background: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${props => props.theme["yellow-dark"]};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;

      span {
        line-height: 1.3;
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
      }
      
      span:first-of-type {
        font-size: 1rem;
        color: ${props => props.theme["base-subtitle"]};
      }
    }
  }
`;

export const AddressFormContainer = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 2.625rem;

    :nth-child(1) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr;
    }

    :nth-child(3) {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }

    :nth-child(4) {
      display: grid;
      grid-template-columns: 1fr 5fr 3.75rem;
    }

    input {
      height: 100%;
      background: ${props => props.theme["base-input"]};
      border: 1px solid ${props => props.theme["base-button"]};
      border-radius: 4px;
      padding: 0.75rem;

      ::placeholder {
        color: ${props => props.theme["base-label"]};
        line-height: 1.3;
        font-size: 0.875rem;
      }
    }
  }
`;