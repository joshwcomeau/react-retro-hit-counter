// @flow

type Colors = {
  [color: string]: { [label: string | number]: string } | string,
};
export const COLORS: Colors = {

};

COLORS.primary = 'tbd';
COLORS.secondary = 'tbd';
COLORS.tertiary = 'tbd';

// Media queries
export const BREAKPOINT_SIZES = {
  xs: 320,
  sm: 540,
  md: 900,
  lg: 1100,
  xl: 1440,
};

export const BREAKPOINTS = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xl: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsMin: `(min-width: ${BREAKPOINT_SIZES.xs}px)`,
  smMin: `(min-width: ${BREAKPOINT_SIZES.sm}px)`,
  mdMin: `(min-width: ${BREAKPOINT_SIZES.md}px)`,
  lgMin: `(min-width: ${BREAKPOINT_SIZES.lg}px)`,
  xlMin: `(min-width: ${BREAKPOINT_SIZES.xl}px)`,
  desktop: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
};

export const MAX_WIDTH = {
  sm: '100%',
  md: BREAKPOINT_SIZES.md + 'px',
  base: BREAKPOINT_SIZES.lg + 'px',
};

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;
export const IS_MOBILE_USER_AGENT = mobileRegex.test(navigator.userAgent);
