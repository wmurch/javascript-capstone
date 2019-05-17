//store NASA updates in an array

//load and display carousel
const updateCarousel = () => {
  document.querySelector
}
const main = () => {
  //fetch pic of the day
  picOfTheDay = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'
  fetch(picOfTheDay)
    .then(response => {
      console.log('Nasa Image')

      console.log(response)
      return response.json()
    })
    .then(headerImage => {
      document.querySelector('.header-center').style.backgroundImage =
        'url(' + headerImage.hdUrl + ')'

      console.log(headerImage)
    })
  //fetch Nasa launch data
  nasaLaunch =
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'
  fetch(nasaLaunch)
    .then(response => {
      console.log('launch times')

      console.log(response)
      return response.json()
    })
    .then(launchContent => {
      console.log({ launchContent })
      document.querySelector('.launch-title').textContent =
        launchContent[0].mission_name
      document.querySelector('.launch-details').textContent =
        launchContent[0].details
      document.querySelector('.launch-status').textContent =
        launchContent[0].launch_success
      document.querySelector('.launch-location').textContent =
        launchContent[0].launch_site.site_name_long
    })
}

document.addEventListener('DOMContentLoaded', main)
