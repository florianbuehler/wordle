import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 0 1.5rem;
  margin-left: auto;
  justify-content: flex-end;

  > p {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>for lelala &#10084;</p>
    </StyledFooter>
  );
};
