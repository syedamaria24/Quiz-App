var firebaseConfig = {
    apiKey: "AIzaSyDkCkRgtidjHLpC92I0fsFYX66BImbVFMs",
    authDomain: "quiz-app-7960d.firebaseapp.com",
    projectId: "quiz-app-7960d",
    storageBucket: "quiz-app-7960d.firebasestorage.app",
    messagingSenderId: "635467891458",
    appId: "1:635467891458:web:4b558ebca9f1b810f1781b"
    };
  
  
  var app = firebase.initializeApp(firebaseConfig);
  
  
  function signup(){
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var password = document.getElementById('password');
  
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
    });
      
    }
  
  
    function login(){
      var email = document.getElementById('Loginemail');
      var password = document.getElementById('Loginpassword');
  
  
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
       console.log(user);
       window.location.href = './firebase.html'
       
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        
      });
  
    }