const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  })
);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('nav-scroll').style.opacity = '0.8';
  } else {
    document.getElementById('nav-scroll').style.opacity = '1';
  }
}
