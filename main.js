const btnToggle = document.querySelector('.toggle_btn');

btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

/*
const trans = ScrollReveal({
    distance: '90px',
    duration: 2000,
    reset: true
});

trans.reveal('.text',{delay:100, origin:'bottom'});*/