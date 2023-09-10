import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , signInWithPopup , signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA2Q6hpjhlxc_pRGuSBAQxCs3vrOP6wx7M",
  authDomain: "clone-e621f.firebaseapp.com",
  projectId: "clone-e621f",
  storageBucket: "clone-e621f.appspot.com",
  messagingSenderId: "342989148955",
  appId: "1:342989148955:web:c87b9a8c05bbd2ee74f9be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth , provider)
        .then(res => {
            const name = res.user.displayName;
            const email = res.user.email;
            const profilePicture = res.user.photoURL;
            
            localStorage.setItem("name" , name);
            localStorage.setItem("email" , email);
            localStorage.setItem("profilePicture" , profilePicture);
        })
        .catch(err => console.log(err))
}

export const gooleSignOut = () =>{
    signOut(auth).then(() => {
        console.log("Sign-out successful")
        localStorage.clear();
      }).catch((error) => {
        console.log(error);
      });
      
}