import _ from 'lodash';
import printMe from './print.js';
import * as d3 from 'd3';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and heck the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

d3.select('body').append('svg')
d3.select("svg").append("line").attr("x1", 20).attr("y1", 20).attr("x2",400).attr("y2",400).style("stroke", "black").style("stroke-width","2px");
d3.select("svg").append("text").attr("x",20).attr("y",20).text("HELLO");
d3.select("svg").append("circle").attr("r", 20).attr("cx",20).attr("cy",20).style("fill","red");
d3.select("svg").append("circle").attr("r", 100).attr("cx",400).attr("cy",400).style("fill","lightblue");
d3.select("svg").append("text").attr("x",400).attr("y",400).text("WORLD");