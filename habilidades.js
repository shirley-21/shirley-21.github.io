const habilidadesSection = document.getElementById("habilidades");
const habilidadesItems = document.querySelectorAll('#habilidades-lista li');

habilidadesSection.addEventListener('mouseover', function() {
  habilidadesItems.forEach((item, index) => {
    const porcentaje = item.getAttribute('data-porcentaje');
    item.style.setProperty('--porcentaje', porcentaje + '%');
    item.style.animationDelay = (index + 1) * 0.2 + 's';
  });
});

window.addEventListener('scroll', function() {
  const habilidadesSectionRect = habilidadesSection.getBoundingClientRect();
  const habilidadesSectionTop = habilidadesSectionRect.top;

  if (habilidadesSectionTop <= window.innerHeight) {
    habilidadesItems.forEach((item, index) => {
      const porcentaje = item.getAttribute('data-porcentaje');
      item.style.setProperty('--porcentaje', porcentaje + '%');
      item.style.animationDelay = (index + 1) * 0.2 + 's';
    });
  }
});