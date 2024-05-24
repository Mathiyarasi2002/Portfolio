let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const sr = ScrollReveal ({
distance: '40px',
duration: 2500,
reset: true,
});

sr.reveal('.logo',{delay:200, orgin: 'left'});
sr.reveal('.navbar',{delay:400, orgin: 'top'});
sr.reveal('.menu-btn',{delay:520,orgin:'right'});

sr.reveal('.home-txt span',{delay:600,orgin:'top'});
sr.reveal('.home-txt h1',{delay:680,orgin:'left'});
sr.reveal('.home-txt p',{delay:750,orgin:'right'});
sr.reveal('.main-btn',{delay:860,orgin:'left'});

sr.reveal('.share',{delay:950,orgin:'bottom'});
sr.reveal('.home-img',{delay:1000,orgin:'right'});