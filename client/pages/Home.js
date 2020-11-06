const footer = require('./components/footer').footer; 
const nav = require('./components/nav').nav;

const body =
`
${nav}
    <div class="body-home">Body</div>
${footer}
`;

module.exports = {body};