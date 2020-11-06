const Home = require('../pages/Home').body;
const Dashboard = require('../pages/dashboard').Dashboard;
const Page404 = require('../pages/404.js').Page404;

module.exports = {
    '/Home'          : Home,
    '/Dashboard' : Dashboard,
    '/404'       : Page404
}
