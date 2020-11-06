const router = require('./utils/router');

function listenerRoutes(){
    console.log(window.location.hash);
}
window.addEventListener('load',(e)=>{
    window.location.hash = '#/Home';
    router.render(window.location.hash);
    //history.pushState({ description: 'me olvidaras' }, 'Home', 'home');
    e.preventDefault();
})
window.addEventListener("hashchange", () => {
    router.render(window.location.hash);
    //listenerRoutes();
});
