const createHeaderButtons = () => {
  $homeButton = $('<button>').text('Home').addClass('home-button')

  $menuButton = $('<button>').text('menu').addClass('menu-button')


  $('header').append($homeButton, $menuButton)
}



const createMenu = () => {
  $menuDiv = $('<div>').addClass('menu-div')

  $menuButton = $('<button>').text('Menu').addClass('menu-button2')
  $aboutMeButton = $('<button>').addClass('about-button').text('About Me')
  $projectsButton = $('<button>').addClass('projects-button').text('Projects')
  $resumeButton = $('<button>').addClass('resume-button').text('Resume')


  $('header').append($menuDiv)
  $menuDiv.append($menuButton, $aboutMeButton, $projectsButton, $resumeButton)


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
})
