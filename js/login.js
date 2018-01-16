$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyD1UOABdrBuyzKqY_NDa2WGwZAH45L76UQ',
    authDomain: 'hello-petsbook.firebaseapp.com',
    databaseURL: 'https://hello-petsbook.firebaseio.com',
    projectId: 'hello-petsbook',
    storageBucket: 'hello-petsbook.appspot.com',
    messagingSenderId: '767249236679'
  };
  firebase.initializeApp(config);

  /* ----------- hacemos login mediante email y password ----------- */
  var btnLogin = $('#btn-login');

  function loginEmailPassword() {
    var email = $('#email-login').val();
    var password = $('#password-login').val();

    console.log($('#email-login').val());
    console.log($('#password-login').val());

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
      window.location.href = '../views/profile.html';
    }).catch(function (error) {
      alert('Oh no! esta cuenta no se encuentra registrada, por favor verifica tu email o contraseña');
    });
  }

  btnLogin.click(function () {
    event.preventDefault();
    loginEmailPassword();
  });
  /* --------------------Fin----------------------- */

  /* ----------- hacemos login con gmail----------- */
  var btnGmail = $('#btn-gm');

  var providerGmail = new firebase.auth.GoogleAuthProvider();
  btnGmail.click(function () {
    firebase.auth().signInWithPopup(providerGmail).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      firebase.database().ref('users/' + user.uid).set({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        profilePhoto: user.photoURL
      }).then(
        user => {
          window.location.href = '../views/profile.html';
        });
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });
  /* --------------------Fin----------------------- */

  /* ----------- hacemos login con facebook----------- */
  var btnFacebook = $('#btn-fb');
  var providerFacebook = new firebase.auth.FacebookAuthProvider();
  btnFacebook.click(function () {
    firebase.auth().signInWithPopup(providerFacebook).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      firebase.database().ref('users/' + user.uid).set({
        name: user.displayName,
        email: user.email,
        profilePhoto: user.photoURL,
      }).then(user => {
        window.location.href = '../views/profile.html';
      });
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });
  /* --------------------Fin----------------------- */
  /* ----------- Obteniendo datos del usuario actual----------- */

  firebase.auth().onAuthStateChanged(function (user) {
    // crear estas clases en profile.html
    var userName = $('.displayUsername'); // name: user.displayName,
    var userEmail = $('.displayEmail'); // email: user.email,
    var profilePhoto = $('.profile-photo'); // profilePhoto: user.photoURL,

    if (user) {
      // User is signed in.
      var name = user.displayName;
      var email = user.email;
      var photoUrl = user.photoURL;
      var emailVerified = user.emailVerified;
      var uid = user.uid;
      // console.log(user);
      username.text(name);
      userEmail.text(email);
      profilePhoto.attr('src', photoUrl);
    } else {
      // No user is signed in.
    }
  });
  /* --------------------Fin----------------------- */

  function loginwatcher() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Usuario activo');
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        console.log('El usuario no esta registrado');
        // ...
      }
    });
  }
  loginwatcher();

});