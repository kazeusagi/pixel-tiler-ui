export function blinkAnimation(start = 0, end = 1) {
  return {
    '@keyframes blink': {
      '0%': { opacity: start },
      '50%': { opacity: end },
      '100%': { opacity: start },
    },
  };
}

export function spinAnimation(start = '0deg', end = '360deg') {
  return {
    '@keyframes spin': {
      '0%': { transform: `rotate(${start})` },
      '100%': { transform: `rotate(${end})` },
    },
  };
}
