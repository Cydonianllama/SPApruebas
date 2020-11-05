const router = require('./utils/router');

function listenerRoutes(){
    console.log(window.location.hash);
}

window.addEventListener("hashchange", () => {
    router.render(window.location.hash);
    listenerRoutes();
});
