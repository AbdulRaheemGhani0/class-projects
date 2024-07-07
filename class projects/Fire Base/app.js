
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

   } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAmen8ZXA64uqla3oEwlqX15zGFDMvPJQE",
    authDomain: "med-care-161ec.firebaseapp.com",
    projectId: "med-care-161ec",
    storageBucket: "med-care-161ec.appspot.com",
    messagingSenderId: "812751043376",
    appId: "1:812751043376:web:38e5c4b1e68e5da96766f5",
    measurementId: "G-XQ639437MM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 const analytics = getAnalytics(app);
  const signup_email = document.getElementById("signup_email");
  const signup_password = document.getElementById("signup_password");
const signup_btn =document.getElementById("signup_btn");
  signup_btn.addEventListener("click",createUserAccount
  );



  const signin_email = document.getElementById("signin_email");
  const signin_password = document.getElementById("signin_password");
const signin_btn =document.getElementById("signin_btn");
  signin_btn.addEventListener("click",signin
  );







  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

function createUserAccount (){
    createUserWithEmailAndPassword
    // console.log("email==> ",signup_email.value);
    // console.log("password==> ",signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
};



function signin (){
    
    signInWithEmailAndPassword(auth, signin_email.value,signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("user");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

} 





  
