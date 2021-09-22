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

var percentEl = document.querySelector('.percent');
var max = 648100000;

(function animloop() {
  if (percentEl.innerHTML >= max) { return; } //Stop recursive when max reach
  requestAnimFrame(animloop); 
  percentEl.innerHTML++;
})();
