import firebase from 'firebase';
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCE5QzdqHaqM5e3R-SkYAS94V_41H75VGM",
  authDomain: "facebook-clone-2-38a31.firebaseapp.com",
  projectId: "facebook-clone-2-38a31",
  storageBucket: "facebook-clone-2-38a31.appspot.com",
  messagingSenderId: "85301177709",
  appId: "1:85301177709:web:5b4b5a1ac89995994bbe64"
};

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db=app.firestore();
  const storage=firebase.storage()

  
  export {storage,db};