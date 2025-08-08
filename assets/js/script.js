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

document.addEventListener('DOMContentLoaded', () => {
    const aboutCard1 = document.getElementById('aboutCard1');
    const aboutCardImg = document.getElementById('aboutCardImg');
    const cardTitle = document.getElementById('cardTitle');
    const cardContent = document.getElementById('cardContent');
    const cardNumber = document.getElementById('cardNumber');
    const card2List = document.querySelectorAll('.about-card2');

    const contentMap = {
        1: {
            title: 'Our Story',
            content: `Cowork was founded in 2023 by Jensen Turner who saw an
        unmet need for dynamic, design-focused coworking
        spaces that foster connection and productivity.`,
            number: '1',
            image: 'assets/images/about-collapse1.png'
        },
        2: {
            title: 'Our Community',
            content: `We’re more than desks and Wi-Fi. Our members form a vibrant
        community of thinkers, makers, and doers.`,
            number: '2',
            image: 'assets/images/about-collapse3.png'
        }
    };

    let activeCard = null;

    card2List.forEach(card => {
        const toggleText = card.querySelector('.expand-toggle-text');

        card.addEventListener('click', () => {
            const cardNum = card.getAttribute('data-card');

            if (activeCard === cardNum) {
                aboutCard1.classList.remove('active');
                toggleText.innerText = 'Tap to expand';
                activeCard = null;
                return;
            }

            const data = contentMap[cardNum];
            cardTitle.innerText = data.title;
            cardContent.innerText = data.content;
            cardNumber.innerText = data.number;
            aboutCardImg.src = data.image;

            aboutCard1.classList.add('active');

            card2List.forEach(c => {
                c.querySelector('.expand-toggle-text').innerText = 'Tap to expand';
            });

            toggleText.innerText = 'Tap to close';
            activeCard = cardNum;
        });
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const plan = document.getElementById("plan").value;
    const message = document.getElementById("message").value.trim();

    if (!firstName || !lastName || !email || !phone || !plan || !message) {
        alert("Please fill all required fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const formContainer = document.getElementById('contactForm');
    formContainer.innerHTML = `
    <div class="thank-you-message" style="text-align:center; padding: 40px;">
      <h2>Thank You!</h2>
      <p>Your message has been successfully submitted.</p>
    </div>
  `;
});