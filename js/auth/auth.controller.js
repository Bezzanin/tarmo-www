angular.module('starter')

  .controller('AuthCtrl', function(Auth, $state){
    var authCtrl = this;

    authCtrl.user = {
      email: '',
      password: ''
    };

    if (firebase.auth().currentUser) {
      $state.go('tab.dash');
    }

    authCtrl.login = function (){
		  firebase.auth().signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).catch(function(error){
  			var errorCode = error.code;
  			var errorMessage = error.message;
        //TODO: translate messages
        switch (errorCode) {
          case 'auth/wrong-password':
            alert('Wrong password.');
            break;
          case 'auth/invalid-email':
            alert('Email is not valid.');
            break;
          case 'auth/user-disabled':
            alert('User accountt is disabled');
            break;
          case 'auth/user-not-found':
            alert('User was not found');
            break;
          default :
            alert(errorMessage);
            break;
          }
  		});
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          $state.go('tab.dash');
        } else {
       // No user is signed in.
        }
      });
    };
    
    authCtrl.register = function (){
 		   firebase.auth().signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          $state.go('tab.dash');
        } else {
       // No user is signed in.
        }
      });
	};

   authCtrl.logOut = function () {
    alert('You were logged out');

    firebase.auth().signOut().then(function() {
     // Sign-out successful.
     $state.go('login');
    }, function(error) {
  // An error happened.
    });

  }


  });