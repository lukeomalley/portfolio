import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px;
  letter-spacing: 5px;
  font-size: 2rem;
`;

const Title = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

export default Title;
