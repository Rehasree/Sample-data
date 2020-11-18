import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDXcFaHUAiZAA5JF_Avdrz2MpTtZ56FomE",
    authDomain: "admin-5bc4a.firebaseapp.com",
    databaseURL: "https://admin-5bc4a.firebaseio.com",
    projectId: "admin-5bc4a",
    storageBucket: "admin-5bc4a.appspot.com",
    messagingSenderId: "232338192877",
    appId: "1:232338192877:web:00d9165b2e0386031acfe4"
};
// Initialize Firebase

var fire = firebase.initializeApp(firebaseConfig);
export default fire;