window.addEventListener('DOMContentLoaded', () => {
  startTween();
});

function startTween() {
  TweenLite.to('#tools', 1, {
    x: 50,
    y: 100,
    scale: 1.5,
  });

  TweenLite.to('.aspect', 1, { color: '#f33', fontSize: '+=50' });
}
