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
  // $homeButton = $('<button>').text('Home').addClass('home-button')
  $homeIcon = $('<i>').addClass('fa-solid').addClass('fa-house').addClass('home-button').css('cursor', 'pointer')

  // $menuButton = $('<button>').text('menu').addClass('menu-button')
  $menuIcon = $('<i>').addClass('fa-solid').addClass('fa-bars').addClass('menu-button').css('cursor', 'pointer')


  $('nav').append($homeIcon, $menuIcon)
}



const createMenu = () => {
  $menuDiv = $('<div>').addClass('menu-div')

  // $menuButton = $('<button>').text('Menu').addClass('menu-button2')
  $exitIcon = $('<i>').addClass('fa-solid fa-xmark').addClass('menu-button2').css('cursor', 'pointer')
  $aboutMeButton = $('<button>').addClass('about-button').text('About Me').css('cursor', 'pointer')
  $projectsButton = $('<button>').addClass('projects-button').text('Projects').css('cursor', 'pointer')
  $resumeButton = $('<button>').addClass('resume-button').text('Resume').css('cursor', 'pointer')
  $github = $('<a>').addClass('github-button').attr('href', 'https://github.com/tylern16').css('display', 'inline-block').css('width', '80%').css('cursor', 'pointer')
  $githubIcon = $('<i>').addClass('fa-brands').addClass('fa-github').appendTo($github)
  $linkedIn = $('<a>').addClass('linkedin-button').attr('href', 'https://www.linkedin.com/in/tylernenninger').css('display', 'inline-block').css('cursor', 'pointer')
  $linkedInIcon = $('<i>').addClass('fa-brands').addClass('fa-linkedin').appendTo($linkedIn)

  $('nav').append($menuDiv)
  $menuDiv.append($exitIcon, $aboutMeButton, $projectsButton, $resumeButton, $github, $linkedIn)


  $menuDiv.hide()
  $('.menu-button').on('click', () => {
    $menuDiv.show()
  })
  $('.menu-button2').on('click', () => {
    $menuDiv.hide()
  })
}

changeColorOnHover = () => {
  $('.about-button').hover(
    () => {
      $('.about-button').css('border', '2px solid white').css('color', 'white')
    },
    () => {
      $('.about-button').css('border', '2px solid #6497b1').css('color', '#6497b1')
    }
  )
  $('.projects-button').hover(
    () => {
      $('.projects-button').css('border', '2px solid white').css('color', 'white')
    },
    () => {
      $('.projects-button').css('border', '2px solid #6497b1').css('color', '#6497b1')
    }
  )
  $('.resume-button').hover(
    () => {
      $('.resume-button').css('border', '2px solid white').css('color', 'white')
    },
    () => {
      $('.resume-button').css('border', '2px solid #6497b1').css('color', '#6497b1')
    }
  )
}




$(() => {
  createHeaderButtons()
  createMenu()
  scrollDownOnClick()
  changeColorOnHover()
})
