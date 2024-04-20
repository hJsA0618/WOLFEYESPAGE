function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px' || sidebar.style.left === '') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}

function closeMenu() {
    var sidebar = document.getElementById('sidebar');
    var header = document.getElementById('header');
    sidebar.style.left = '-250px';
    header.style.display = 'block'; 
}

function openSection(sectionId) {
    var header = document.getElementById('header');
    var logo = document.getElementById('logo'); 
    header.style.display = 'none'; 
    logo.style.display = 'none'; 

    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    var section = document.getElementById(sectionId);
    section.classList.add('active');
}

function goToHeader() {
    var header = document.getElementById('header');
    var logo = document.getElementById('logo'); 

    header.style.display = 'block'; // Mostramos el encabezado
    logo.style.display = 'block'; // Mostramos la imagen del logo

    header.scrollIntoView({ behavior: 'smooth' }); // Hacemos que la página se desplace al encabezado con un efecto de suavizado
}

function toggleParagraph(sectionId) {
    var paragraph = document.querySelector('#' + sectionId + ' p');
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}

function openSurvey() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeCp79UVK_6XCwpp_aseelP6REqXiIW59PkAPrrZRTsVyK_iw/viewform";
}