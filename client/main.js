var home = require('./pages/Home');
const root = document.getElementById('root');

async function render(template) {
    async function getTemplate(data) {
        let template_ = await data.loadTemplate();
        return template_
    }
    let forender = await getTemplate(template);
    root.innerHTML = forender;
}

window.addEventListener('load',()=>{
    console.log('load page');
    history.pushState({id : 'asdasd'},'Home', '/home');
    render(home);
})

  