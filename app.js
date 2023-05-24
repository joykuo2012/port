let container = document.querySelector(".container");

container.addEventListener("wheel", (event) => {
  event.preventDefault();
  container.scrollLeft += event.deltaY;
});

var dot = document.getElementById("dot");
var mouseX = 0;
var mouseY = 0;
var delay = 100; // 延迟时间，单位为毫秒

document.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function updateDotPosition() {
  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
}

function delayedUpdate() {
  setTimeout(function () {
    updateDotPosition();
    delayedUpdate();
  }, delay);
}

delayedUpdate();
