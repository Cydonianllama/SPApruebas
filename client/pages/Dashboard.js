const nav = require('../pages/components/nav').nav;
const footer = require('../pages/components/footer').footer;

const Dashboard = 
`
${nav}
<h2>Estoy en el dashboard</h2>
${footer}
`;

module.exports = {Dashboard};