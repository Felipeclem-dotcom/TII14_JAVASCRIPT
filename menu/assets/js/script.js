const btnToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

btnToggle.addEventListener('click', () => {
  // alert('Click');
    menuNav.classList.toggle('show');
});

window.addEventListener('click', (e) =>{
    if(!btnToggle.contains(e.target)){
        menuNav.classList.remove('show');
    }
});