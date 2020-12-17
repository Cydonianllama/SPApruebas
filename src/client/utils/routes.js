const Home = require('../pages/Home').body;
const Dashboard = require('../pages/dashboard').Dashboard;
const Page404 = require('../pages/404').Page404;
const Login = require('../pages/Login').LoginTemplate;

module.exports = {
    '/Login'        : Login,
    '/Home'         : Home,
    '/Dashboard'    : Dashboard,
    '/404'          : Page404
}
