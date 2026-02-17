// src/icons/index.js
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Home = ({ color = '#FFF', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z"
      fill={color}
    />
  </Svg>
);

export const Search = ({ color = '#FFF', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M10 2a8 8 0 0 1 6.32 12.9l4.39 4.39-1.41 1.41-4.39-4.39A8 8 0 1 1 10 2z"
      fill={color}
    />
  </Svg>
);

export const Downloads = ({ color = '#FFF', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3v12l4-4h-3V3h-2v8H8l4 4V3zM5 19h14v2H5v-2z"
      fill={color}
    />
  </Svg>
);

export const Menu = ({ color = '#FFF', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
      fill={color}
    />
  </Svg>
);