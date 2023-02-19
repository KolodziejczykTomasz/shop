import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from '@/js/firebase';


export const useStoreAuth = defineStore("storeAuth", {
  state: () => ({
    auth: false,
    user: {},
    users: {},
    usersFetch: {},
    usersFetch2: {},
    userToChange:{},
    relifUserData: {},
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

    async filterUserAuthName(user) {
      const data = await $fetch("http://localhost:4000/users");
      this.usersFetch2 = data;      
      const userIdFind = (this.usersFetch2.filter((item) => item.email === user.email))[0].id;     
      this.userId = userIdFind 
    },   

    async submitRefilForm(userRefil, userId){ 
      this.relifUserData =  JSON.stringify({userRefil });
      const data = await $fetch("http://localhost:4000/users/" + userId);
      this.usersFetch = data;       
      this.userToChange = {...userRefil, ...data};
      await $fetch("http://localhost:4000/users/" + userId, {
                    method: "put",
                    body: JSON.stringify(this.userToChange),
            });      
      }
    }
  })