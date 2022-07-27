const scrollToAbout = () => {
  const element = document.getElementById('about-me')
  element.scrollIntoView()
}
const scrollToProjects = () => {
  const element = document.getElementById('projects')
  element.scrollIntoView()
}
const scrollToResume = () => {
  const element = document.getElementById('resume')
  element.scrollIntoView()
}
const scrollToTop = () => {
  const element = document.getElementById('welcome')
  element.scrollIntoView()
}
const scrollDownOnClick = () => {
  $('.about-button').on('click', scrollToAbout)
  $('.projects-button').on('click', scrollToProjects)
  $('.resume-button').on('click', scrollToResume)
  $('.home-button').on('click', scrollToTop)

}

const createHeaderButtons = () => {
  $homeButton = $('<button>').text('Home').addClass('home-button')

  $menuButton = $('<button>').text('menu').addClass('menu-button')


  $('nav').append($homeButton, $menuButton)
}



const createMenu = () => {
  $menuDiv = $('<div>').addClass('menu-div')

  $menuButton = $('<button>').text('Menu').addClass('menu-button2')
  $aboutMeButton = $('<button>').addClass('about-button').text('About Me')
  $projectsButton = $('<button>').addClass('projects-button').text('Projects')
  $resumeButton = $('<button>').addClass('resume-button').text('Resume')
  $github = $('<a>').text('Github').addClass('github-button').attr('href', 'https://github.com/tylern16').css('display', 'inline-block')
  $linkedIn = $('<a>').text('LinkedIn').addClass('linkedin-button').attr('href', 'https://www.linkedin.com/in/tylernenninger').css('display', 'inline-block')

  $('nav').append($menuDiv)
  $menuDiv.append($menuButton, $aboutMeButton, $projectsButton, $resumeButton, $github, $linkedIn)


  $menuDiv.hide()
  $('.menu-button').on('click', () => {
    $menuDiv.show()
  })
  $('.menu-button2').on('click', () => {
    $menuDiv.hide()
  })
}







$(() => {
  createHeaderButtons()
  createMenu()
  scrollDownOnClick()
})
