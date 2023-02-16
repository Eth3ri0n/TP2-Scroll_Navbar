// Créer un événément au scroll
// const nav = document.querySelector('#navbar');

let navScroll = 0;

window.addEventListener('scroll', () => {
    console.log(navScroll);
    
    if (window.scrollY < navScroll) {
        navbar.style.top = 0;
    } else {
        navbar.style.top = '-60px';
    }
    
    navScroll = window.scrollY;

});
// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
