var body = document.body;
var map = document.getElementById("map");
var info = document.getElementById("info");
var infoToggle = document.getElementById("infoToggle");
var infoClose = document.getElementById("infoClose");
var cell;
var cellSize = 60;
var border = true;
var x = 15;
var y = 20;

info.style.display = "none";
infoToggle.onclick = function () { toggleInfo(); };
infoClose.onclick = function () { info.style.display = "none"; };
resize();

function toggleInfo () {console.log("INFO");
  if (info.style.display == "none") info.style.display = "block";
  else info.style.display = "none";
}

function createTiles () {
  map.innerHTML = "";
  for (var i = 0; i < (x*y); i++) {
    cell = document.createElement("p");
    cell.className = "cell";
    if (border) cell.className += " bordered";
    cell.onmousedown = function(){changeColor(this)};
    cell.style.width = cellSize + "px";
    cell.style.height = cellSize + "px";
    map.appendChild (cell);
  }
}

function Cell () {
  this.x;
  this.y;
  this.dir;
  this.type;
}

function changeColor (cell) {
  cell.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

function randomize () {
  var cells = map.childNodes;
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
}

function reset () {
  var cells = map.childNodes;
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '#777';
  }
}

function toggleBorder () {
  if (border) {
    border = false;
    map.style.borderColor = "transparent";
  } else {
    border = true;
    map.style.borderColor = "black";
  }
  
  var cells = map.childNodes;
  for (var i = 0; i < cells.length; i++) {
    cells[i].className = "cell";
    if (border) cells[i].className += " bordered";
  }
}

function resize () {
  x = Math.floor((body.offsetWidth - 2) / cellSize);
  y = Math.floor((body.offsetHeight - 60 - 2) / cellSize);
  map.style.width = x * cellSize + "px";
  console.log("size: " + x + "*" + y);
  createTiles();
}

function changeSize (size) {
  cellSize = size;
  var cells = map.childNodes;
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.width = size + "px";
    cells[i].style.height = size + "px";
  }
  resize();
}
