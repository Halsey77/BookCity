const authService = require('./authService');

exports.showAuthLayout = (req, res) => {
    res.render('authLayout', {wrongPassword: req.query.wrongPassword !== undefined});
}

exports.showRegisterLayout = (req, res) => {
    res.render('register');
}

exports.signIn = (req, res) => {
    console.log('Login Successfully');
    if(req.user){
        res.redirect('/');
    }
    else{
        res.redirect('/auth');
    }
}

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}

exports.Register = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    try {
        if(!firstName || !lastName || !email || !password) {
            res.render('register', {errorCode: 1});
        } else {
            await authService.Register(firstName, lastName, email, password);
            //login as registed user
            res.redirect('/auth');
        }
    } catch (error){
        //duplicate user
        res.render('register', {errorCode: 2});
    }
}
