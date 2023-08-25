import '../js/form.js'

const randomIPK = (Math.random() * 3 + 1).toFixed(2)

document.querySelector('[name=ipk]').setAttribute('value', randomIPK)

if (randomIPK < 3) {
  document.querySelectorAll('[type=submit], [type=file]').forEach((elm) => {
    elm.setAttribute('disabled', true)
  })
}

document.querySelector('[type=submit]').addEventListener('click', (e) => {
  e.preventDefault()

  const formData = new FormData(e.target.form)
  const data = Object.fromEntries(formData)

  sessionStorage.setItem('data', JSON.stringify(data))
  location.assign('hasil.html')
})

