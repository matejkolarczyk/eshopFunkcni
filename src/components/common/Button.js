import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid white;
  border-color: ${props =>
    props.cart ? 'var(--mainYellow)' : 'white'};
  color: ${props => (props.cart ? 'var(--mainYellow)' : 'white')};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 300ms ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? 'var(--mainYellow)' : 'var(--maingrey)'};
    color: ${props => (props.cart ? 'var(--maingrey)' : 'black')};};
    border-color: var(--maingrey);
  }
  &:focus {
    outline: none;
  }
`;
