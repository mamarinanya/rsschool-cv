const links = document.querySelectorAll('.header__menu-item a');

links.forEach((element) => {
    element.addEventListener('click', (ev) => {
        ev.preventDefault();

        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        console.log(id);

        if(section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            console.log('No');
        }
    })
})