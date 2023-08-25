import '../js/form.js'

const registered = sessionStorage.getItem('data')

if (!registered) {
  alert('Anda belum melakukan pendaftaran!')
  location.replace('daftar.html')
  throw false
}

const data = JSON.parse(registered)

Object.entries(data).forEach(([k ,v]) => {
  if (k === 'berkas') return

  const input = document.querySelector(`[name=${k}]`)

  input.setAttribute('readonly', true)

  switch (input.nodeName) {
    case 'SELECT':
      input.querySelector(`[value="${v}"]`).setAttribute('selected', true)
      break;
    default:
      input.setAttribute('value', v)
  }
})
