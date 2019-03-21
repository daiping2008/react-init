

document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize  = window.innerWidth / 10
  html.style.fontSize = (fontSize > 50 ? 50 : fontSize) + 'px'
})