const menuBtn = document.getElementById('menu');
const topNav = document.getElementById('topNav');
const logo = document.querySelector('h1');
const navigation = document.getElementById('topNav-list');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordion.length; i++) {
    const nested = accordion[i].children;
    accordion[i].addEventListener("click", () => {
        nested[0].classList.add('rotate')
        if(nested[1].style.maxHeight) {
            nested[1].style.maxHeight = null;
        } else {
            nested[1].style.maxHeight = nested[1].scrollHeight + "px";
        }
        if(nested[0].style.transform) {
            nested[0].style.transform = null;
        } else {
            nested[0].classList.toggle('down')
        }
    })
}


// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", () => {
//         for (let i = 0; i < nested.length; i++) {
//             nested[i].classList.toggle("change")
//         }
//     })
    
// }



