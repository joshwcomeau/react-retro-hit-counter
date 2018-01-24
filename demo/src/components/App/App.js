import React from 'react';
import styled from 'styled-components';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Center from '../Center';
import Title from '../Title';

const App = () => (
  <MaxWidthWrapper>
    <Center>
      <Title>React Retro Hit Counter</Title>
      <marquee>
        <MarqueeContent>
          Easily the best hit counter on Altavista.
        </MarqueeContent>
      </marquee>
    </Center>
  </MaxWidthWrapper>
);

const MarqueeContent = styled.span`
  display: inline-block;
  color: black;
  background-color: yellow;
  padding: 6px;
`;

export default App;
