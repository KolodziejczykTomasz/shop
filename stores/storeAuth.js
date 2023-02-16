import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from '@/js/firebase';


export const useStoreAuth = defineStore("storeAuth", {
  state: () => ({
    auth: false,
    user: {},
    users: {},
    userId: 0
  }),

  actions: {
   
    registerUser(user) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;          
          navigateTo("/shop");
        })
        .catch((error) => {
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },

    loginUser(user) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          alert("Użytkownik został zalogowany!");
          const user = userCredential.user;
          this.auth = true;   
          this.user.id = user.uid;
          this.user.email = user.email;     
          navigateTo("/shop");  
               
        })
        .catch((error) => {
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });     
    },

    logoutUser() {
      signOut(auth)
        .then(() => {
          alert("Wylogowano z aplikacji");
          this.auth = false;
          this.user = {};       
          navigateTo("/");       
        })
        .catch((error) => {
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },

    async filterUserAuthName() {
      const data = await $fetch("http://localhost:4000/users");
      this.users = data;      
      const userIdFind = (this.users.filter((item) => item.email === this.user.email))[0].id;     
       return this.userId = userIdFind;     
    },   
  }
});


