// src/constants/index.js

import { device } from './device';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  inactiveGrey: '#999999',
  primaryRed: '#E50914',
};

export const gStyle = {
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  spacer3: {
    height: 30,
  },
  navTabStyle: {
    backgroundColor: '#111111',
    borderTopColor: '#222222',
    borderTopWidth: 1,
  },
};

// placeholder for asset loader
export const func = {
  loadAssetsAsync: async () => {
    // preload fonts/images here if needed
    return Promise.resolve();
  },
};

export { device };