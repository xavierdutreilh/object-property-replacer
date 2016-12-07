'use strict';

function replace(destination, source) {
  for (let key in destination) {
    if (destination.hasOwnProperty(key)) {
      delete destination[key];
    }
  }

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }

  return destination;
}

module.exports = replace;
