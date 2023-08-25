import { html, render } from '../js/preact/standalone.js';
import scholarships from '../scholarships.js'

const form = document.querySelector('#form')
const inputs = [
  {
    type: 'Input',
    props: {
      name: 'nama',
      label: 'Masukkan nama',
      type: 'text',
      pattern: '[A-Za-z ]+',
      maxlength: '64',
    }
  },
  {
    type: 'Input',
    props: {
      name: 'email',
      label: 'Masukkan email',
      type: 'email',
      maxlength: '32',
    }
  },
  {
    type: 'Input',
    props: {
      name: 'no_hp',
      label: 'Nomor HP',
      type: 'number',
      maxlength: '15',
    }
  },
  {
    type: 'Select',
    props: {
      name: 'semester',
      label: 'Semester saat ini',
      options: ['1', '2', '3', '4', '5', '6', '7', '8']
    }
  },
  {
    type: 'Input',
    props: {
      name: 'ipk',
      label: 'IPK terakhir',
      class: 'input',
      type: 'number',
      readonly: true
    }
  },
  {
    type: 'Select',
    props: {
      name: 'beasiswa',
      label: 'Pilihan beasiswa',
      options: scholarships.map((item) => item.title)
    }
  },
]

function Input(props) {
  return html`
    <label class="label" for=${props.name}>${ props.label }</label>
    <input class="input" id=${props.name} ...${props} required />
  `
}

function Select({ name, label, options }) {
  return html`
    <label class="label" for=${name}>${ label }</label>
    <select class="input" id=${name} name=${name} required>
      <option value="" disabled selected>Pilih</option>
      ${options.map((option) => html`
      <option value=${option.toLowerCase()}>${ option }</option>
      `)}
    </select>
  `
}

function App() {
  return inputs.map(({ type, props }) => {
    switch (type) {
      case 'Input':
        return html `<${Input} name=${props.name} ...${props} />`
      case 'Select':
        return html `<${Select} name=${props.name} ...${props} />`
    }
  })
}

render(html`<${App} name="root" />`, form, form.querySelector('#form-slot'))
