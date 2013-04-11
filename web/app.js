var template = 'http://www.mrln.org.s3-website-us-east-1.amazonaws.com/Merlin-Tiles/{Z}/{X}/{Y}.png';
var provider = new MM.TemplatedLayer(template);
var map = new MM.Map('map', provider);

map.setZoom(12).setCenter({ lat: 39.2883, lon: -76.6139 });