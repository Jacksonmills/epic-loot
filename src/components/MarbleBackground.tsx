import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useSimplexNoise } from '../hooks/use-simplex-noise';

const MarbleBackground = ({ children }: { children: ReactNode; }) => {
  const simplexNoise = useSimplexNoise(500, 500, 50);

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${simplexNoise})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #111111;
`;

export default MarbleBackground;
