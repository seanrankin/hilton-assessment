import styled from 'styled-components';

export const Legend = styled.legend`
  float: left;
  width: 100%;
  font-weight: bold;
  border-radius: 6px 6px 0 0;
  padding: 0 0 0 3px;
  background-color: ${props => (props.checked ? '#e7e7e7' : '#dbdbe3')};
  span {
    display: inline-block;
    padding: ${props => (props.id === 1 ? '3px 0 3px 3px' : 0)};
  }
`;
