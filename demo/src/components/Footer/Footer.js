import React from 'react';
import styled from 'styled-components';

import ieBadge from '../../images/ie-badge.png';
import netscapeBadge from '../../images/netscape-badge.png';

import Center from '../Center';

const Footer = () => {
  return (
    <FooterElem>
      <Center>
        <Badge src={ieBadge} />
        <Badge src={netscapeBadge} />
        <br />
        Copyright 2018-present Josh Comeau
      </Center>
    </FooterElem>
  );
};

const FooterElem = styled.footer`
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const Badge = styled.img`
  width: 86px;
  margin: 0 2px;
`;

export default Footer;
