// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyDRQ7-MWvSxdWFouBWPEd-ycr49FbiK9sc",
    authDomain: "insta1clone.firebaseapp.com",
    projectId: "insta1clone",
    storageBucket: "insta1clone.appspot.com",
    messagingSenderId: "1024275671110",
    appId: "1:1024275671110:web:0864847feb2ead0b2e0247",
    measurementId: "G-ZN4B4GL1D7"
 });
//grabbing 3 services frm firebase db authentication storage so no need s3amazon web services
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export{db,auth,storage};

  //export default db;