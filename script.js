const menuBtn = document.getElementById('menu');

const accordion = document.querySelectorAll('[data-accordion]');
for (let i = 0; i < accordion.length; i++) {
    const nested = accordion[i].children;
    accordion[i].addEventListener("click", () => {
        nested[0].classList.add('animate')
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

const navigation = document.getElementById('topNav-list');

function active() {
    navigation.classList.add('animate')
    menuBtn.addEventListener("click", () => {
        navigation.classList.toggle('out')
    })
}

active()


function mediaQuery() {
    if(window.innerWidth <= 990) {
        navigation.classList.add('out')
    }
}

mediaQuery()




