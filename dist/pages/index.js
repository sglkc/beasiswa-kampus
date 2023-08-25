import { html, render } from '../js/preact/standalone.js'
import scholarships from '../scholarships.js'

function App() {
  return html`${scholarships.map((scholarship) => Beasiswa(scholarship))}`
}

function Beasiswa ({ title, classes, text, image }) {
  return html`
    <a class="beasiswa ${classes} group" href="form.html">
      <div class="beasiswa__container">
        <h3 class="beasiswa__title">Beasiswa ${title}</h3>
        <p class="beasiswa__text">${text}</p>
      </div>
      <div class="beasiswa__image-container">
        <img class="beasiswa__image-shadow" src=${'assets/images/' + image} />
        <img class="beasiswa__image" src=${'assets/images/' + image} />
      </div>
    </a>
  `
}

render(html`<${App} name="root" />`, document.querySelector('#beasiswa'))
