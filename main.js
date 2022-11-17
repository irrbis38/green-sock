window.addEventListener("DOMContentLoaded", () => {
  // startTween();
  startTimeline();
});

function startTimeline() {
  const tl = gsap.timeline();
  const duration = 1;
  tl.to("#tools", duration, { y: -100, ease: Elastic.easeInOut });
  tl.to("#power", duration, { y: -100 });

  const startBtn = document.getElementById("start");
  const pauseBtn = document.getElementById("pause");
  const reverseBtn = document.getElementById("reverse");

  startBtn.addEventListener("click", () => {
    tl.play();
  });
  pauseBtn.addEventListener("click", () => {
    tl.pause();
  });
  reverseBtn.addEventListener("click", () => {
    tl.reverse();
  });
}

function startTween() {
  TweenLite.to("#tools", 1, {
    x: 50,
    y: 100,
    scale: 1.5,
  });

  TweenLite.to(".aspect", 1, { color: "#f33", fontSize: "+=50" });
}
