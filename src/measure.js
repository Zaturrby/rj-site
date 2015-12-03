var fs = require('fs');
var geojsonArea = require('geojson-area');
var turf = require('turf');

var geom = JSON.parse(fs.readFileSync('NL.IMRO.0166.00060601-VB01-Bouwvlak.json', 'utf8'));

var groteBlok = geojsonArea.geometry(geom.features[0].geometry);
var kleineBlok = geojsonArea.geometry(geom.features[1].geometry);
var nutsBlok = geojsonArea.geometry(geom.features[2].geometry);
var macBlok = geojsonArea.geometry(geom.features[3].geometry);
var boerBlok = geojsonArea.geometry(geom.features[4].geometry);


// var totaal = turf.area(geom);

var bestemmingsplanDetailhandel = groteBlok + kleineBlok;
var bebouwd = groteBlok +

console.log("macdonalds: ", macBlok);
console.log("boerblok: ", boerBlok);
console.log("nutsBlok: ", nutsBlok);
console.log("groot detail: ", groteBlok);
console.log("Klein detail: ", kleineBlok);

console.log("officieel detailhandel: ", kleineBlok + groteBlok);
console.log("bebouwd en gebruikt als detailhandel: ", groteBlok + (1/4) * boerBlok);
console.log("bebouwd en gebruikt als detailhandel + boer en tuincentrum: ", groteBlok + (3/4) * boerBlok);




console.log(groteBlok+kleineBlok+boerBlok*(2/3));
console.log(boerBlok);