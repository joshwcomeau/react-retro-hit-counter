import { PureComponent } from 'react';

class ScrollDisabler extends PureComponent {
  // When disabling scroll, the main window's scrollbar may disappear
  // (presuming that the page is long enough, and the OS doesn't auto-hide
  // scrollbars). This can cause content to jump by a few pixels, since
  // disabling scroll will remove those scrollbars.
  // We'll add some temporary padding to the body to offset this effect.
  // When the class is constructed, get the current width of the scrollbar.
  // (IE10+)
  scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  componentDidMount() {
    this.oldOverflow = document.body.style.overflow;
    this.oldPosition = document.body.style.position;
    this.oldWidth = document.body.style.width;
    this.oldHeight = document.body.style.height;
    this.oldPaddingRight = document.body.style.paddingRight;
    this.oldTop = document.body.style.top;

    this.oldScrollY = window.scrollY;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = `calc(100% + ${this.oldScrollY}px)`;
    document.body.style.paddingRight = `${this.scrollbarWidth}px`;
    document.body.style.top = `-${this.oldScrollY}px`;
  }

  componentWillUnmount() {
    document.body.style.overflow = this.oldOverflow;
    document.body.style.position = this.oldPosition;
    document.body.style.width = this.oldWidth;
    document.body.style.height = this.oldHeight;
    document.body.style.paddingRight = this.oldPaddingRight;
    document.body.style.top = this.oldTop;

    window.scrollTo(0, this.oldScrollY);
  }

  render() {
    return null;
  }
}

export default ScrollDisabler;
