// @flow

type Colors = {
  [color: string]: { [label: string | number]: string } | string,
};
export const COLORS: Colors = {
  yellow: {
    '100': '#FFF9C4',
    '300': '#FFF176',
    '500': '#FFEB3B',
    '700': '#FBC02D',
    '900': '#F57F17',
  },
  orange: {
    '100': '#FFECB3',
    '300': '#FFD54F',
    '500': '#FFC107',
    '700': '#FFA000',
    '900': '#FF6F00',
  },
  green: {
    '300': '#B2FF59',
    '500': '#76FF03',
    '700': '#64DD17',
    '900': '#33691E',
  },
  blue: {
    '100': '#B3E5FC',
    '300': '#4FC3F7',
    '500': '#03A9F4',
    '700': '#0288D1',
    '900': '#01579B',
  },
  indigo: {
    '100': '#b3defc',
    '300': '#4f9ef7',
    '500': '#0380f4',
    '700': '#0268d1',
    '900': '#01499b',
  },
  purple: {
    '100': '#E1BEE7',
    '300': '#BA68C8',
    '500': '#9C27B0',
    '700': '#7B1FA2',
    '900': '#4A148C',
  },
  pink: {
    '100': '#F8BBD0',
    '300': '#F06292',
    '500': '#E91E63',
    '700': '#C2185B',
    '900': '#880E4F',
  },
  gray: {
    '50': '#FAFAFA',
    '100': '#F5F5F5',
    '300': '#E0E0E0',
    '400': '#CCCCCC',
    '500': '#9E9E9E',
    '700': '#616161',
    '800': '#414141',
    '900': '#212121',
  },
  white: '#FFFFFF',
};

COLORS.primary = COLORS.green;
COLORS.secondary = COLORS.yellow;
COLORS.tertiary = COLORS.purple;

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
