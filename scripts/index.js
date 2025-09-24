const proyectos = [];

function render(list) {
  const $cards = document.querySelector('#cards');
  $cards.innerHTML = list
    .map(
      (p) => `
    <article class="card">
      <h3>${p.titulo}</h3>
      <p>${p.descr}</p>
      <p><a href="${p.link}" target="_blank" rel="noopener noreferrer">Ver</a></p>
    </article>
  `
    )
    .join('');
}

document.querySelector('#form-proyecto').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const nuevo = {
    titulo: data.get('titulo').trim(),
    link: data.get('link').trim(),
    descr: data.get('descr').trim(),
  };
  proyectos.push(nuevo);
  render(proyectos);
  e.target.reset();
});

render(proyectos);
