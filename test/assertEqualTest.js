const assertEqual = require('../assertEqual');``
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), 1);