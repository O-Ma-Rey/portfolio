// Variables
const nav = document.querySelector('#nav');
const topOfNav = nav.offsetTop;

const toggle = document.querySelector('.checkbox');
const exploreBtn = document.querySelector('.explore');

const aboutBtn = document.querySelector('.nav-about');
const resumeBtn = document.querySelector('.nav-resume');
const projectBtn = document.querySelector('.nav-project');
const contactBtn = document.querySelector('.nav-contact');

// Functions
function fixNav() {
  window.addEventListener('scroll', fixNav);
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

function toggleLight() {
  var elem = document.body;
  elem.classList.toggle("light-mode");
}

function toNav() {
  const elem = document.getElementById('nav');
  elem.scrollIntoView({behavior: "smooth"});
}

function toAbout() {
  const elem = document.getElementById('about');
  elem.scrollIntoView({behavior: "smooth"});
}

function toResume() {
  const elem = document.getElementById('resume');
  elem.scrollIntoView({behavior: "smooth"});
}

function toProject() {
  const elem = document.getElementById('projects');
  elem.scrollIntoView({behavior: "smooth"});
}

function toContact() {
  const elem = document.getElementById('contact');
  elem.scrollIntoView({behavior: "smooth"});
}

// Event listeners
window.addEventListener('scroll', fixNav);

toggle.addEventListener('click', toggleLight);
exploreBtn.addEventListener('click', toNav);

aboutBtn.addEventListener('click', toAbout);
resumeBtn.addEventListener('click', toResume);
projectBtn.addEventListener('click', toProject);
contactBtn.addEventListener('click', toContact);