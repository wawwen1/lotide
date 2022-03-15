const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head(['nice', 'weather', 'woo']), 'nice');
