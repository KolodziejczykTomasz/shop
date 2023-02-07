<template>
    <Header />
    <section id="newsletter">
        <p class="title">Zapisz się do naszego newslettera</p>
        <div class="newsletter__form">
            <form autocomplete="off" @submit.prevent="addEmailToNewsletter()">                
               <input type="email" name="email" v-model="newsletterEmail.email" placeholder="Wpisz swój adres email" required/>
                <button type="submit">Zapisz</button>
            </form>
        </div>
    </section>
    <Footer />
</template>
<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import { useCartStore } from "~~/stores/cartStore";
const cartStore = useCartStore()
cartStore.getCart();

interface newsletterEmail {   
    email: string   
}

const newsletterEmail: newsletterEmail = {email: ""};
const addEmailToNewsletter = async () => {
    await cartStore.submitNewsletterForm(newsletterEmail.email)    
    setTimeout(() => {      
       
        alert("Dziekujemy, adres email został dodany!!!");        
    }, 1000)
    }
</script>

<style lang="scss">
#newsletter {
    @include flex-center;
    flex-direction: column;
    font-size: $font-size-m;
    margin: 70px 20px;
   
    & .title {
        font-size: $font-size-xl;
        font-weight: $bold;
        padding-bottom: 50px;
    }

    & div {
        flex-direction: row;
        height: 150px;
    }
}
.newsletter__form form {
    @include flex-center;
    flex-direction: row;
    & input {
        display: flex;
        width: 500px;
        max-width: 80%;
        height: 40px;
        margin: 15px 0;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding-left:20px;
        border: 2px solid $primary-color-green;
        &:focus {
            border: 2px solid $primary-color-green !important;
        }
    }
   
        & button {
            @include flex-center;
            border: 2px solid $yellow;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            color: $yellow;
            display: flex;
            font-size: $font-size-s;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 200px;
            margin: 20px 0 20px 3px;
            background-color: $primary-color-green;
            transition: .2s;
            
                &:hover {
                    color: $white;
                }
            }
        

}
</style>