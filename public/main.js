//store NASA updates in an array
position = 0
articles = []
//load and display carousel
const updateCarousel = () => {
  // console.log('Update Carousel')
  document.querySelector('.launch-title').textContent = articles[position].title
  document.querySelector('.launch-details').textContent =
    articles[position].details
  document.querySelector('.launch-status').textContent =
    articles[position].status
  document.querySelector('.launch-location').textContent =
    articles[position].location
}
const main = () => {
  //fetch pic of the day
  picOfTheDay = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'
  fetch(picOfTheDay)
    .then(response => {
      // console.log('Nasa Image')

      //  console.log(response)
      return response.json()
    })
    .then(headerImage => {
      document.querySelector('.header-center').style.backgroundImage =
        'url(' + headerImage.hdUrl + ')'

      //    console.log({ headerImage })
    })
  //fetch Nasa launch data
  nasaLaunch =
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'
  fetch(nasaLaunch)
    .then(response => {
      //   console.log('launch times')

      // console.log(response)
      return response.json()
    })
    .then(launchArticles => {
      // console.log({ launchArticles })
      for (position = 0; position < launchArticles.length; position++) {
        const article = {
          title: launchArticles[position].mission_name,
          details: launchArticles[position].details,
          status: launchArticles[position].launch_success,
          location: launchArticles[position].launch_site.site_name_long
        }
        position = 0
        articles.push(article)
        updateCarousel()
      }
    })
}
console.log(articles)
const loadPrevCarousel = () => {
  console.log('Get Previous Carousel')
  prev = position--
  if ((prev = -1)) {
    return launchArticles.length--
  } else {
    console.log(prev)
    /* document.querySelector('.launch-title').textContent =
        launchArticles[position].title
      document.querySelector('.launch-details').textContent =
        launchArticles[position].details
      document.querySelector('.launch-status').textContent =
        launchArticles[position].status
      document.querySelector('.launch-location').textContent =
        launchArticles[position].location */
  }
}
const loadNextCarousel = () => {
  console.log('Get Next Carousel')
  next = position++
  if ((next = launchArticles.length)) {
    return 0
  } else {
    console.log(next)
    /* document.querySelector('.launch-title').textContent =
        launchArticles[position].title
      document.querySelector('.launch-details').textContent =
        launchArticles[position].details
      document.querySelector('.launch-status').textContent =
        launchArticles[position].status
      document.querySelector('.launch-location').textContent =
        launchArticles[position].location */
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.prev').addEventListener('click', loadPrevCarousel)
document.querySelector('.next').addEventListener('click', loadNextCarousel)
