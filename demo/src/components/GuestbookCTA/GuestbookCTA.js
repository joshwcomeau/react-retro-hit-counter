// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import guestbookImageSrc from '../../images/guestbook.gif';
import newImageSrc from '../../images/new.gif';

type Props = {
  handleClick: () => void,
};

const GuestbookCTA = ({ handleClick }: Props) => {
  return (
    <WrapperButton onClick={handleClick}>
      <Subheading>
        <img src={newImageSrc} /> Don't forget to
      </Subheading>
      <Heading>Sign Our Guestbook</Heading>
      <GuestbookImage src={guestbookImageSrc} />
    </WrapperButton>
  );
};

const WrapperButton = styled.button`
  display: block;
  text-align: center;
  font-size: 36px;
  max-width: 350px;
  margin: auto;
  padding: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Subheading = styled.h5`
  font-size: 14px;
  font-weight: 300;
  color: ${COLORS.purple[100]};
`;

const Heading = styled.h3`
  font-size: 24px;
  color: ${COLORS.purple[100]};
`;

const GuestbookImage = styled.img`
  width: 100px;
`;

export default GuestbookCTA;
