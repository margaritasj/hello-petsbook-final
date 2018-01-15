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

  // Crear
  var btnCreate = $('#btn-create');

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
});