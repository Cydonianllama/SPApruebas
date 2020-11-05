const routes = require('./routes');
const root = document.getElementById('root');

function render(url){
    let template = `<h2>NULL</h2>`;
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
    }
}
module.exports = {render};