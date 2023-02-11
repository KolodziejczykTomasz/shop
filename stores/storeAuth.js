import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from "firebase/auth";
import { auth } from '@/js/firebase';


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
      } else {
        this.user = {};
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
        const user = userCredential.user
        this.auth = true
        navigateTo('/shop')    
      }).catch((error)=> { 
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
    logoutUser() {      
        signOut(auth).then(()=>{
          alert("Wylogowano z aplikacji")
          this.auth = false
          navigateTo('/') 
    }).catch((error)=> {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
      })
    },
    

  }
})