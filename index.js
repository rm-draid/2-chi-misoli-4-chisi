const backgroundbody = document.getElementById("backgroundbody");
const btn = document.getElementById("btn");
const colors = [
  "red",
  "yellow",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "brown",
  "cyan",
  "magenta",
];

let timer = null;

btn.addEventListener("click", function () {
  if (timer === null) {
    timer = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      backgroundbody.style.backgroundColor = randomColor;
    }, 2000);
  } else {
    clearInterval(timer);
    timer = null;
  }
});
