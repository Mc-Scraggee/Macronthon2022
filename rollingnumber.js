// Use requestAnimationFrame with setTimeout fallback
window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

let percentEl = document.querySelector('.percent');
let max = 6421000000;

(function animloop() {
  if (percentEl.innerHTML >= max) { return; } //Stop recursive when max reach
  requestAnimFrame(animloop); 
  percentEl.innerHTML++;
})();
