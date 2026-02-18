// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    ...defaultConfig.resolver,
  },
  transformer: {
    ...defaultConfig.transformer,
  },
};
