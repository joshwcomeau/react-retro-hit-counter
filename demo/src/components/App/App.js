import React from 'react';
import styled from 'styled-components';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Header from '../Header';
import Center from '../Center';
import Title from '../Title';

import Demo from '../Demo';

import Footer from '../Footer';

const App = () => (
  <Wrapper>
    <Header />

    <DemoWrapper>
      <Demo />
    </DemoWrapper>

    <Footer />
  </Wrapper>
);

const Wrapper = styled(MaxWidthWrapper)`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const DemoWrapper = styled.div`
  flex: 1;
`;

export default App;
