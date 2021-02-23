const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const port = 9800;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//start passport
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs');

passport.serializeUser((user,cb)=>{
    cb(null,user)
})

app.get('/',(req,res) =>{
    res.render('pages/login')
});

app.get('/profile',(req,res) =>{
    res.send(userprofile)
})

app.get('/error',(req,res) => res.send('Error while login'));

passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: "http://localhost:9800/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userprofile = profile;
      return done(null,userprofile)
  }
));

//will take to google website
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] 
}));


//when thing done on google it come back
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/profile');
  });


app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})