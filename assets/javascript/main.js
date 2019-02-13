





// ========================================================== //
// main function starts here

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxURvb2P5b98RMeAjFdM6y5WhwcmDLAe8",
  authDomain: "brads-rock-paper-scissors.firebaseapp.com",
  databaseURL: "https://brads-rock-paper-scissors.firebaseio.com",
  projectId: "brads-rock-paper-scissors",
  storageBucket: "brads-rock-paper-scissors.appspot.com",
  messagingSenderId: "922054871853"
};
firebase.initializeApp(config);
initFirebaseAuth();

var db = firebase.firestore();
