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
      $('.about-button').css('border', '2px solid #93deff').css('color', '#93deff')
    }
  )
  $('.projects-button').hover(
    () => {
      $('.projects-button').css('border', '2px solid white').css('color', 'white')
    },
    () => {
      $('.projects-button').css('border', '2px solid #93deff').css('color', '#93deff')
    }
  )
  $('.resume-button').hover(
    () => {
      $('.resume-button').css('border', '2px solid white').css('color', 'white')
    },
    () => {
      $('.resume-button').css('border', '2px solid #93deff').css('color', '#93deff')
    }
  )
}

const displayMoreProjects = () => {
  $('#more-button').hide()

  $moreProjects = $('<div>').addClass('more-projects')

  $project3container = $('<div>').css('display', 'flex').addClass('main-text')
  $project3container2 = $('<div>').css('display', 'grid').css('margin', '10px')
  $project3image = $('<img>').attr('src', 'pictures/codingImage.jpeg').attr('id', 'project3-image').css('height', '200%')
  $project3title = $('<h3>').text('T#')
  $project3text = $('<p>').text('I created my own coding language called T# using a Samsung Smart Fridge.')

  $project4container = $('<div>').css('display', 'flex').addClass('main-text')
  $project4container2 = $('<div>').css('display', 'grid').css('margin', '10px')
  $project4image = $('<img>').attr('src', 'pictures/project4.jpeg').attr('id', 'project4-image')
  $project4title = $('<h3>').text('Project 4')
  $project4text = $('<p>').text('Project 4 is a placeholder project for later on when I have something to put here.')

  $showLessButton = $('<button>').text('Show Less ').attr('id', 'less-button')
  $upArrow = $('<a>').addClass('fa-solid fa-angle-up').appendTo($showLessButton)

  $('#container-projects').append($moreProjects)
  $moreProjects.append($project3container, $project4container, $showLessButton)
  $project3container.append($project3image, $project3container2)
  $project3container2.append($project3title, $project3text)
  $project4container.append($project4container2, $project4image)
  $project4container2.append($project4title, $project4text)

  $showLessButton.on('click', () => {
    $('#more-button').show()
    $moreProjects.remove()
  })

  animateShowLessButton()
}




const makeShowMore = () => {
  $showMoreButton = $('<button>').text('Show More ').attr('id', 'more-button')
  $downArrow = $('<a>').addClass('fa-solid fa-angle-down').appendTo($showMoreButton)

  $('#container-projects').append($showMoreButton)

  $showMoreButton.on('click', displayMoreProjects)
}


const animateShowMoreButton = () => {
  $('#more-button').hover(
    () => {
      $('#more-button').animate({
        borderWidth: '4px',
        padding: '+=2'
      })
    },
    () => {
      $('#more-button').animate({
        borderWidth: '2px',
        padding: '-=2'
      })
    }
  )
}

const animateShowLessButton = () => {
  $('#less-button').hover(
    () => {
      $('#less-button').animate({
        borderWidth: '4px',
        padding: '+=2'
      })
    },
    () => {
      $('#less-button').animate({
        borderWidth: '2px',
        padding: '-=2'
      })
    }
  )
}


$(() => {
  createHeaderButtons()
  createMenu()
  scrollDownOnClick()
  changeColorOnHover()
  makeShowMore()
  animateShowMoreButton()
  animateShowLessButton()
})
