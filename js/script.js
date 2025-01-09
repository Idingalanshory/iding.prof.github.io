// toggle icon navbar
    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.getElementsByClassName('navbar')['0'];
    
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    } 
// scroll section
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // aktifkan tautan navbar
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }     
            else {
                sec.classList.remove('show-animate');
            }
    });

        //sticky header
        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);

        // click menu navbar lalu hilang
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

        //animasi footer
        let footer = document.getElementById('footer');

        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
         

}


