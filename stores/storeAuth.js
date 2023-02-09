import {defineStore} from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from '@/js/firebase';

export const useStoreAuth = defineStore("storeAuth", {
  state: () => ({
    auth: true
  }),
  actions: {
    registerUser(user) {
        console.log("registracion action", user);
         createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential)=> {
        alert("Użytkownik został dodany!");     
        const user = userCredential.user;
      }).catch((error)=> {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
    loginUser(user) {
        console.log("login action", user);       
         signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential)=> {
        alert("Użytkownik został zalogowany!");     
        const user = userCredential.user;
      }).catch((error)=> {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
    logoutUser() {      
        signOut(auth).then(()=>{alert("Wylogowano z aplikacji")
    }).catch((error)=> {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
  }
})