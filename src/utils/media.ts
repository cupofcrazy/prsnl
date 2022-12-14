// Device Sizes
export const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xl2: '1440px',
  xl3: '1920px'
}

// CSS Media Queries
export const mq = {
  sm: `screen and (min-width: ${sizes.sm})`,
  md: `screen and (min-width: ${sizes.md})`,
  lg: `screen and (min-width: ${sizes.lg})`,
  xl: `screen and (min-width: ${sizes.xl})`,
  xl2: `screen and (min-width: ${sizes.xl2})`,
  xl3: `screen and (min-width: ${sizes.xl3})`
};

export const formatNumber = (num: number) => {
  return num < 10 ? `0${num}` : num.toString();
}

export const ease = {
  easeInOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)'
  // TODO add more transitions
}