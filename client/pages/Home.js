const footer = require('./components/footer').footer; 
const nav = require('./components/nav').nav;

const body =
`
${nav}
<div class="container">
    <h2>Soy el cuerpo</h2>
</div>
${footer}
`;

module.exports = {body};