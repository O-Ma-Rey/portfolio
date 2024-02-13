// Variables
const exploreBtn = document.querySelector('.explore');
const aboutBtn = document.querySelector('.panel-about');
const resumeBtn = document.querySelector('.panel-resume');
const projectBtn = document.querySelector('.panel-projects');
const contactBtn = document.querySelector('.panel-contact');

// Functions
function toNav() {
  var elem = document.getElementById('nav');
  elem.scrollIntoView();
}

function toAbout() {
  var elem = document.getElementById('about');
  elem.scrollIntoView();
}

function toResume() {
  var elem = document.getElementById('resume');
  elem.scrollIntoView();
}

function toProjects() {
  var elem = document.getElementById('projects');
  elem.scrollIntoView();
}

function toContact() {
  var elem = document.getElementById('contact');
  elem.scrollIntoView();
}

// Event Listeners
exploreBtn.addEventListener('click', toNav);
aboutBtn.addEventListener('click', toAbout);
resumeBtn.addEventListener('click', toResume);
projectBtn.addEventListener('click', toProjects);
contactBtn.addEventListener('click', toContact);

