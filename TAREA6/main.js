const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        sections.forEach(sec => sec.classList.remove('active'));
        
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});