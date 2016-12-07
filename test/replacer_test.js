'use strict';

const path = require('path');

const expect = require('expect');

const replacer = require(path.join(__dirname, '..', 'lib'));

describe('object-property-replacer', () => {
  describe('replace', () => {
    it('should replace all properties', () => {
      const destination = {
        'id': 1,
        'email': 'jdoe@example.com',
        'password': '123456',
      };

      const source = {
        'id': 1,
        'email': 'jdoe@example.com',
        'role': 'user',
      };

      replacer.replace(destination, source);

      expect(destination).toEqual({
        'id': 1,
        'email': 'jdoe@example.com',
        'role': 'user',
      });

      expect(source).toEqual({
        'id': 1,
        'email': 'jdoe@example.com',
        'role': 'user',
      });
    });
  });
});
