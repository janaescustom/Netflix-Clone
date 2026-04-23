import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDTu6H8xeU0GgHyeko6VjfnZi5Qa1A_4ZM",
  authDomain: "first-firebase-8fd21.firebaseapp.com",
  projectId: "first-firebase-8fd21",
  storageBucket: "first-firebase-8fd21.firebasestorage.app",
  messagingSenderId: "187045488092",
  appId: "1:187045488092:web:088c6e70796f7719745b19"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword( auth, email, password );
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  }catch(error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login worked")
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" ") || "Login Failed")
  }
}

const logout = () => {
  signOut(auth)
}

export {auth, db, login, signup, logout}