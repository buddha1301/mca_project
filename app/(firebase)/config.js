
import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp,collection,addDoc,setDoc,updateDoc,doc,onSnapshot,query,where,getDocs,getDoc} from "firebase/firestore"
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,updateProfile,signInWithCredential,sendPasswordResetEmail} from "firebase/auth"
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC_Q0bbxomPK1XpUnmw9t1JaOBbk1JPt0Y",
  authDomain: "oldagevoterslist.firebaseapp.com",
  projectId: "oldagevoterslist",
  storageBucket: "oldagevoterslist.appspot.com",
  messagingSenderId: "1026564943014",
  appId: "1:1026564943014:web:b7a86a4736558ebbb79867"
};

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const projectFirestore = getFirestore(app)
  const projectAuth = getAuth(app)
  const projectStorage=getStorage(app)


  export {app,query,where,getDocs,getDoc,signInWithPopup,GoogleAuthProvider,doc,updateDoc,addDoc,setDoc,ref,uploadBytes, getDownloadURL,signInWithCredential,projectFirestore,projectStorage, projectAuth, serverTimestamp,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,collection,updateProfile,onSnapshot,sendPasswordResetEmail} 