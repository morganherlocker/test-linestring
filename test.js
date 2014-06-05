var test = require('tape')
var linestring = require('./linestring.json')

test('load linestring', function(t){
  t.ok(linestring, 'point loaded')
  t.ok(linestring.geometry.coordinates, 'coordinates loaded')

  t.end()
})