const login = 
`
<div class="login">
    <form>
        <input type="text" placeholder="username" name="username" id="username_">
        <label for="username">Username</label>
        <input type="password" placeholder="password" name="password" id="password_">
        <label for="password">Password</label>
        <div class="options-login">
            <button>Register</button>
            <button>Login</button>
        </div>
    </form>
</div>
`;
async function getTemplateLogin(){
    return login;
}
module.exports = {getTemplateLogin};
