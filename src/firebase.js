const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCvJzGg00ZqeR2q0zL9lRtH70KTDg6IjPY",
  authDomain: "whatsapp-11013.firebaseapp.com",
  projectId: "whatsapp-11013",
  storageBucket: "whatsapp-11013.appspot.com",
  messagingSenderId: "850859315711",
  appId: "1:850859315711:web:eccf0617a4f1d98ac8d7ca"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;


