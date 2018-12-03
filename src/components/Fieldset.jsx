import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: 2px solid ${props => (props.checked ? '#e7e7e7' : '#ccd0dc')};
  background-color: ${props => (props.checked ? 'white' : '#dbdbe3')};
  display: inline-block;
  max-width: 110px;
  font-size: 0.6em;
  border-radius: 8px;
  padding: 0;
`;
