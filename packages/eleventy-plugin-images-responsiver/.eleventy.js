'use strict';

const imagesResponsiver = require('images-responsiver');
const unescape = require('html-escaper').unescape;

let imagesResponsiverOptions;

const imagesResponsiverTransform = (content, outputPath) => {
  if (outputPath && outputPath.endsWith('.html')) {
    return unescape(imagesResponsiver(content, imagesResponsiverOptions));
  }
  return content;
};

module.exports = {
  configFunction: (eleventyConfig, options = {}) => {
    imagesResponsiverOptions = options;
    eleventyConfig.addTransform(
      'imagesResponsiver',
      imagesResponsiverTransform
    );
  },
};
