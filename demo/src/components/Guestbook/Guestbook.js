// @flow
/**
 * A guestbook, except not really. It's just a joke.
 * NOTE: I'm being REALLY lazy here and not abstracting a modal component.
 */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import underConstructionImageSrc from '../../images/under-construction.gif';

type Props = {
  handleToggle: () => void,
};

const Guestbook = ({ handleToggle }: Props) => {
  return (
    <Wrapper>
      <Backdrop onClick={handleToggle} />
      <Modal>
        <Title>Sign the Guestbook</Title>
        <UnderConstructionImage src={underConstructionImageSrc} />
        <Paragraph>
          Sorry, the guestbook is under construction.
          <br />
          If you want, though, you can{' '}
          <a href="https://twitter.com/JoshWComeau">
            tweet your thoughts at me
          </a>!
        </Paragraph>

        <Paragraph>
          <button onClick={handleToggle}>Close Modal</button>
        </Paragraph>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.button`
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border: none;
`;

const Modal = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  min-height: 300px;
  padding: 2rem 3rem;
  background: ${COLORS.white};
  text-align: center;
  color: black;
`;

const Title = styled.h3`
  font-size: 48px;
  margin-bottom: 2rem;
`;

const UnderConstructionImage = styled.img`
  width: 200px;
`;

const Paragraph = styled.p`
  margin-top: 2rem;
  line-height: 1.5;
`;

export default Guestbook;
