const pixelToViewWidth = (size: number, width = 1440): string =>
  `${(size / width) * 100}vw`;

export default pixelToViewWidth;
