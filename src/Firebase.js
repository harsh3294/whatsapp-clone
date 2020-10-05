import firebase from "firebase";
 const firebaseConfig = {
  apiKey: "AIzaSyDo91AjEhyzRfy6j6g3RV10taDg5sDL2bE",
  authDomain: "whatsapp-clone-255d0.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-255d0.firebaseio.com",
  projectId: "whatsapp-clone-255d0",
  storageBucket: "whatsapp-clone-255d0.appspot.com",
  messagingSenderId: "435936232237",
  appId: "1:435936232237:web:946b68f8a1b01a6da309a4",
  measurementId: "G-XM6VG2SJC2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
