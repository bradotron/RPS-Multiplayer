// ====================================== //
// firebase authorization stuff goes here //

// signs into the train scheduler
function signIn() {
  // Sign in Firebase with credential from the Google user.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

// Signs-out of train scheduler
function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // Initialize Firebase.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  // Return the user's profile pic URL.
  return (
    firebase.auth().currentUser.photoURL || `/assets/images/profile_placeholder.png`
  );
}

// Returns the signed-in user's display name.
function getUserName() {
  // Return the user's display name.
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  // return true if a user is signed-in.
  return !!firebase.auth().currentUser;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

  } else {
    // User is signed out!

  }
}