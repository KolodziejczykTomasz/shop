<template>
    <Header />
    <section id="contact">
        <div class="title">Kontakt</div>
        <div class="contact__wrapper">
            <div>
                <p class="subtitle">Napisz do nas</p> 
                <div class="contact__form">
                    <form autocomplete="off" @submit.prevent="addContactMessage()">
                        <input type="text" name="name" v-model="contactMessage.name" placeholder="Wpisz swoje imię" required/>
                        <input type="email" name="email" v-model="contactMessage.email" placeholder="Wpisz swój adres email" required/>
                        <input type="text" name="subject" v-model="contactMessage.subject" placeholder="Temat" required/>
                        <textarea placeholder="Wiadomość" v-model="contactMessage.message" name="message" required></textarea>
                        <button type="submit">Wyślij</button>
                    </form>
                </div>
            </div>
            <div>
                <p class="subtitle">Jak dojechać?</p>           
                <div class="footer-map">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515.990476992065!2d20.57510733731571!3d54.127336381087034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2f5a2d6111b95%3A0x23ac2d005320a112!2sPoligraf.%20Sp%C3%B3%C5%82dzielnia%20Pracy!5e0!3m2!1spl!2spl!4v1675571525291!5m2!1spl!2spl"
                    width="100%" height="450" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>
<script setup lang="ts" >
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import { useCartStore } from "~~/stores/cartStore";

const cartStore = useCartStore()
cartStore.getCart();

interface contactMessage {
    name: string,
    email: string,
    subject: string,
    message: string
}


const addContactMessage = async () => {  
    await cartStore.submitContactForm(contactMessage);   
    setTimeout(() => {      
        alert("Dziekujemy, wiadmość została wysłana!!!");  
           
    }, 1000)
   
}
 const contactMessage: contactMessage = { email: "", name: "", subject: "", message: "" };
useHead({
    title: 'Kontakt z nami',
    meta: [{ name: 'description', content: 'Napisz do nas' }]
})
</script>

<style lang="scss" scoped>
#contact {
    margin: 70px auto;

    &  .contact__wrapper div:first-child{
        padding-left: 20px;
    }
& .title {
        font-size: $font-size-xxl;
        font-weight: $bold;
        text-align: center;
        padding-bottom: 70px;
    }
    & .subtitle {
        font-size: $font-size-xl;      
        text-align: left;
        padding-bottom: 50px;
        color: $gray;
    }

    & .contact__wrapper {
        display: grid;
        width: 100%;
        min-height: 400px;
        height: auto;
        grid-template-columns: 1fr 1fr;       
    }

    & .footer-map {
        padding-right: 30px;
    }
}



.contact__form form {
    @include flex-center;
    flex-direction: column;
    & input {
        display: flex;
        min-width: 300px;
            width: 80%;
        height: 40px;
        margin: 15px 0;
        border-radius: 20px;
        padding-left:20px;
        &:focus {
            border: 2px solid $primary-color-green !important;
        }
    }

    & textarea {
        display: flex;
        min-width: 300px;
        width: 80%;
        height: 120px;
        margin: 20px 0;
        border-radius: 20px;
        padding-left:20px;
        padding-top:10px;
        &:focus {
            border: 2px solid $primary-color-green !important;
        }
    }

        & button {
            @include flex-center;
            border: 2px solid $yellow;
            border-radius: 30px;
            color: $yellow;
            display: flex;
            font-size: $font-size-s;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 200px;
            margin: 20px 0;
            background-color: $primary-color-green;
            transition: .2s;
            
                &:hover {
                    color: $white;
                }
            }
        

}

@media only screen and (max-width: 768px) {
#contact .contact__wrapper {        
        grid-template-columns: 1fr;
        padding: 0 10px;
    }

}
</style>