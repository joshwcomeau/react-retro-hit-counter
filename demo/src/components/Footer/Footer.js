import React from 'react';
import styled from 'styled-components';

import ieBadge from '../../images/ie-badge.png';
import netscapeBadge from '../../images/netscape-badge.png';

import Center from '../Center';

const Footer = () => {
  return (
    <FooterElem>
      <Center>
        Copyright 2018-present Josh Comeau.
        <Badges>
          <Notice>This page will not work on:</Notice>
          <Badge src={ieBadge} />
          <Badge src={netscapeBadge} />
        </Badges>
      </Center>
    </FooterElem>
  );
};

const FooterElem = styled.footer`
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

const Badges = styled.div`
  margin-top: 1rem;
`;

const Notice = styled.div`
  font-size: 11px;
  margin-bottom: 5px;
`;

const Badge = styled.img`
  width: 86px;
  margin: 0 2px;
`;

export default Footer;
