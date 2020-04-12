var x = 0,
  y = 0;

function main() {
  while (x === y) {
    get_scores();
  }

  document.getElementById("img1").src = "images/dice" + x + ".png";
  document.getElementById("img2").src = "images/dice" + y + ".png";
  
  if (x > y) {
    document.querySelector("h1").innerHTML = "⛳Player 1 is Winner";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 is Winner⛳";
  }
}

main();

function get_scores() {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
}
