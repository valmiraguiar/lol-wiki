export const isMobile = (
  currentWidth: number,
) => {
  return currentWidth < 637;
};

export const isDesktop = (
  currentWidth: number,
) => {
  return currentWidth > 864;
};