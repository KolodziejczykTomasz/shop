import {defineStore} from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '@/js/firebase';

export const useStoreAuth = defineStore("storeAuth", {
  state: () => ({
    auth: false,
    user: {}
  }),


  actions: {
    init(){
      onAuthStateChanged(auth, (user) => {
      if(user){
        this.user.id = user.uid;
        this.user.email = user.email;
        this.auth = true;           
      } else {
        this.user = {};
        this.auth = false;
        }       
    
      })
    },
    registerUser(user) {     
         createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential)=> {
        alert("Użytkownik został dodany!");     
        const user = userCredential.user;
      }).catch((error)=> {        
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
    loginUser(user) {          
         signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential)=> {
        alert("Użytkownik został zalogowany!");     
        const user = userCredential.user;
      }).catch((error)=> { 
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
    logoutUser() {      
        signOut(auth).then(()=>{
          alert("Wylogowano z aplikacji")
    }).catch((error)=> {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
  }
})