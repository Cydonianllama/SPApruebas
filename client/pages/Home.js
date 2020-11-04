const footer = require('./components/footer'); 
const nav = require('./components/nav');

const body =
`
${nav.nav}
<div class="container">
    <h2>Soy el cuerpo</h2>
</div>
${footer.footer}
`;

async function loadTemplate(root){
    return body;
}

module.exports = {loadTemplate,body};