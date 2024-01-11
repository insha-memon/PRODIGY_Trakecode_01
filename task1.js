const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navlist');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('navlist-active');
});