const main = () => {
  imageUrl = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'
  fetch(imageUrl)
    .then(response => {
      console.log('2')

      console.log(response)
      return response.json()
    })
    .then(headerImage => {
      document.querySelector('header').style.backgroundImage =
        'url(headerImage.hdUrl)'

      console.log(headerImage)
    })
}

document.addEventListener('DOMContentLoaded', main)
