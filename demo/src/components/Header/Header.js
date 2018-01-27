import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Title from '../Title';

const Header = () => {
  return (
    <Wrapper>
      <Title>React Retro Hit Counter</Title>
      <Marquee>
        <MarqueeContent>Perfect for your LiveJournal!</MarqueeContent>
      </Marquee>

      <Paragraph>
        Relive your youth with this straight-outta-geocities hit counter. If you
        have a page on the Information SuperHighway, slap this bad boy on it and
        impress all your friends.
      </Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding-top: 4rem;
  padding-bottom: 2rem;
  text-align: center;
`;

const Marquee = styled.marquee`
  margin-top: -1.5rem;
  padding-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  transform: rotate(4deg);
`;

const MarqueeContent = styled.span`
  display: inline-block;
  color: black;
  background-color: ${COLORS.yellow[500]};
  padding: 6px;
`;

const Paragraph = styled.p`
  font-size: 22px;
  max-width: 450px;
  margin: auto;
  text-shadow: 1px 1px 1px black;
`;

export default Header;
