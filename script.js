(function(){
  const btn = document.getElementById('enlargeBtn');
  const h1 = document.getElementById('title');
  if (!btn || !h1) return;

  const MAX_PX = 72; // tamaño máximo
  const STEP_PX = 4; // incremento por clic

  btn.addEventListener('click', () => {
    const style = window.getComputedStyle(h1);
    const current = parseFloat(style.fontSize) || 40;
    const next = Math.min(current + STEP_PX, MAX_PX);
    h1.style.fontSize = next + 'px';
  });
})();