var boxFill = function(event) {
  this.style.backgroundColor = currentColor;
};
var selectColor = function(event) {
  currentColor = this.style.backgroundColor;
};

var body = document.body;
var colorArray = [
  "red",
  "blue",
  "green",
  "black",
  "yellow",
  "purple",
  "orange",
  "teal",
  "grey",
  "pink"
];
var currentColor = "black";

body.id = "body";

var heading = document.createElement("h1");
heading.innerText = "Pixel Art";

body.appendChild(heading);

var p = document.createElement("p");
p.innerText = "Dom Shizz";
body.appendChild(p);

// create color menu

var paletteRow = document.createElement("div");
paletteRow.className = "palette-row";
body.appendChild(paletteRow);

for (let i = 0; i < colorArray.length; i++) {
  let paletteDiv = document.createElement("div");
  paletteDiv.id = `color_${colorArray[i]}`;
  paletteDiv.style.backgroundColor = colorArray[i];
  paletteDiv.addEventListener("click", selectColor);
  paletteDiv.classList.add("palette");
  paletteRow.appendChild(paletteDiv);
}
for (let yPos = 0; yPos < 10; yPos++) {
  let rowDiv = document.createElement("div");
  rowDiv.id = `row${yPos}`;
  // Create pixels
  for (let xPos = 0; xPos < 10; xPos++) {
    let pixelDiv = document.createElement("div");
    pixelDiv.id = `${xPos}_${yPos}`;
    // pixelDiv.className = 'pixel';
    pixelDiv.classList.add("pixel");
    pixelDiv.addEventListener("click", boxFill);
    rowDiv.appendChild(pixelDiv);
  }
  body.appendChild(rowDiv);
}
