//navbar
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeBtn1 = document.getElementById('closeBtn1');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');

    if (window.innerWidth <= 768) {
        hamburger.style.display = 'none';
    }
});

closeBtn1.addEventListener('click', () => {
    navMenu.classList.remove('active');

    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
    } else {
        hamburger.style.display = 'none';
        hamburger.classList.remove('active');
    }
})


// custom container
window.addEventListener('resize', () => {
    const container1 = document.querySelectorAll('.container1');

    container1.forEach(container2 => {
        if (window.innerWidth < 1000) {
            container2.style.maxWidth = '100%';
            // container2.style.padding = '30px';
            // container2.style.margin = '0 12px';
        } else {
            container2.style.maxWidth = '1440px';
            // container2.style.padding = '30px';
            // container2.style.margin = '0 12px';

        }
    })

});