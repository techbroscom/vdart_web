// firebase-config.js

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Test
const firebaseConfig = {
    apiKey: "AIzaSyCvcxuv1-MWBtHMIUkeqGH_gfyBWaNN7K0",
    authDomain: "vdarttest.firebaseapp.com",
    projectId: "vdarttest",
    storageBucket: "vdarttest.appspot.com",
    messagingSenderId: "157342186908",
    databaseURL: "https://vdarttest-default-rtdb.asia-southeast1.firebasedatabase.app",
    appId: "1:157342186908:web:ea6c53598d3e9d1cab9c59",
    measurementId: "G-NVXLVD13D1"
  };

//Production
// const firebaseConfig = {
//   apiKey: "AIzaSyBMZSR-bVbbVHESPSGlE4VMk8mZEOobBlM",
//   authDomain: "vdartvallet.firebaseapp.com",
//   databaseURL: "https://vdartvallet-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "vdartvallet",
//   storageBucket: "vdartvallet.appspot.com",
//   messagingSenderId: "129560196114",
//   appId: "1:129560196114:web:074dfed173b5c46b1714cb",
//   measurementId: "G-7T4KVNSDKK"
// };  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  