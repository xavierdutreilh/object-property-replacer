# object-property-replacer [![Build Status](https://travis-ci.org/xavierdutreilh/object-property-replacer.svg?branch=master)](https://travis-ci.org/xavierdutreilh/object-property-replacer) [![Dependency Status](https://gemnasium.com/badges/github.com/xavierdutreilh/object-property-replacer.svg)](https://gemnasium.com/github.com/xavierdutreilh/object-property-replacer)

> A [Node.js](https://nodejs.org/) module to replace the properties of an object by the properties of another object

## Installation

Install using npm:

```bash
npm install -S object-property-replacer
```

## Usage

Replace the properties of a destination object by the properties of a source object:

```javascript
const replacer = require('object-property-replacer');

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
// destination = {'id': 1, 'email': 'jdoe@example.com', 'role': 'user'}
```

## License

`object-property-replacer` is released under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).
