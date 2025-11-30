
var fs = require("fs");
var m = require("micromark");
var marky = require("marky");

var doc = fs.readFileSync("markdown.md");

marky.mark("micromark");
var x = m(doc);
var entry = marky.stop("micromark");

if (typeof document !== "undefined") document.body.innerHTML = x;

console.log(entry.duration);