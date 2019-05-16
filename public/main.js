const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = ''
  }
}

document.addEventListener('DOMContentLoaded', main)
