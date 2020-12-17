const router = require('./utils/router');
function app(){
    window.addEventListener('load', (e) => {
        window.location.hash = 'Home';
        router.render(window.location.hash);
        //history.pushState({ description: 'me olvidaras' }, 'Home', 'home');
        e.preventDefault();
    });
    window.addEventListener("hashchange", () => {
        router.render(window.location.hash);
    });
}
console.log('hola desde mi archivo raiz de mi SPA');
app();//app contains all the actions about my app

