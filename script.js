const mainListItem = document.querySelectorAll('.m-item')
const i_subMenu = document.getElementById('i-Menu');
const g_subMenu = document.getElementById('g-Menu');
const j_subMenu = document.getElementById('j-Menu');
const h_subMenu = document.getElementById('h-Menu');
const nav = document.getElementById('s-mainMenu');
const button = document.getElementById('toggle');

console.log(button)

mainListItem.forEach(e => {  
    e.addEventListener('click',function(){
        if (e.id == 'genre') {
            if (g_subMenu.style.display === "none") {
                g_subMenu.style.display = "block";
              } else {
                g_subMenu.style.display = "none";
              }
        }
       if (e.id == 'instruments') {
          if (i_subMenu.style.display === "none") {
              i_subMenu.style.display = "block";
            } else {
              i_subMenu.style.display = "none";
            }
      }
        if (e.id == 'type') {
            if (h_subMenu.style.display === "none") {
                h_subMenu.style.display = "block";
              } else {
                h_subMenu.style.display = "none";
              }
        }
       if (e.id == 'method') {
          if (j_subMenu.style.display === "none") {
              j_subMenu.style.display = "block";
            } else {
              j_subMenu.style.display = "none";
            }
      }
    });
 })

function toggleMenu() {
  nav.classList.toggle("open")
}
