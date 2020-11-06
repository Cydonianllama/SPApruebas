const routes = require('./routes');
const root = document.getElementById('root');

function clghash(url){
    console.log(url);
}

function render(url){
    let template = `<h2>NULL</h2>`;
    clghash(url);
    root.innerHTML = template;
    switch(url){
        case '#/Home':
            template = routes["/Home"]; 
            root.innerHTML = template;
            break;
        case '#/Dashboard': 
            template = routes["/Dashboard"]; 
            root.innerHTML = template;
            break;
        default:
            template = routes["/404"];
            root.innerHTML = template;
            break;
    }
}
module.exports = {render};