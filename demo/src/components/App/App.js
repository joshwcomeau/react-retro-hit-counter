// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Guestbook from '../Guestbook';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Header from '../Header';
import Demo from '../Demo';
import GuestbookCTA from '../GuestbookCTA';
import Footer from '../Footer';
import ScrollDisabler from '../ScrollDisabler/ScrollDisabler';

type Props = {};

type State = {
  isGuestbookVisible: boolean,
};

class App extends Component<Props, State> {
  state = {
    isGuestbookVisible: false,
  };

  toggleGuestbook = () => {
    this.setState(state => ({ isGuestbookVisible: !state.isGuestbookVisible }));
  };

  render() {
    console.log(this.state.isGuestbookVisible);
    return (
      <Fragment>
        {this.state.isGuestbookVisible && (
          <Fragment>
            <ScrollDisabler />
            <Guestbook handleToggle={this.toggleGuestbook} />
          </Fragment>
        )}

        <Wrapper>
          <Header />

          <DemoWrapper>
            <Demo />
          </DemoWrapper>

          <GuestbookCTAWrapper>
            <GuestbookCTA handleClick={this.toggleGuestbook} />
          </GuestbookCTAWrapper>

          <Footer />
        </Wrapper>
      </Fragment>
    );
  }
}

const Wrapper = styled(MaxWidthWrapper)`
  position: relative;
  z-index: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DemoWrapper = styled.div`
  flex: 1;
`;

const GuestbookCTAWrapper = styled.div`
  padding-top: 8rem;
`;

export default App;
