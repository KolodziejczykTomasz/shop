<template>
    <Header />
    <section id="new-user">
        <p class="title">Rejestracja nowego użytkownika</p>
        <div class="new-user__form">
            <form autocomplete="off" @submit.prevent="onSubmit">
                <input type="email" name="email" v-model="user.email" placeholder="Wpisz swój adres email" />
                <input type="password" name="password" v-model="user.password" placeholder="Hasło"  />
                   
                <button type="submit">Rejestracja</button>
            </form>
        </div>
        <NuxtLink to="/user/login"> <span> Mam już konto</span></NuxtLink>
    </section>
    <Footer />
</template>
<script setup lang="ts" >
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";

import { useStoreAuth } from "~~/stores/storeAuth";
import { useCartStore } from "~~/stores/cartStore";

const storeAuth = useStoreAuth();
const cartStore = useCartStore()
cartStore.getCart();

interface user {
    email: string,
    password: string  
}

const user: user = { email: "", password: "" };
const onSubmit = () => {
    if (!user.email || !user.password) {
        alert("Wpisz nazwę oraz hasło użytkownika")
    } else {
        if(user) {
            storeAuth.registerUser(user)
            signUpUserToApp()
        }
    }
}

const signUpUserToApp = async () => {
    await cartStore.submitSingUpForm(user)
    setTimeout(() => {
        alert("Użytkownik dodany");
    }, 1000)
}

useHead({
    title: 'Nowy użytkownik',
    meta: [{ name: 'description', content: 'Nowy użytkownik' }]
})
</script>

<style lang="scss">
#new-user {
    margin: 70px 20px;

    & .title {
        font-size: $font-size-xl;
        font-weight: $bold;
        text-align: center;
        padding-bottom: 70px;
    }

    & span {
        font-size: $font-size-s;
        color: $gray;
        text-align: center;
        width: 100%;
        display: inline-block;

        &:hover {
            color: $primary-color-green;
        }
    }
}

.new-user__form form {
    @include flex-center;
    flex-direction: column;

    & input {
        display: flex;
        width: 500px;
        max-width: 80%;
        height: 40px;
        margin: 15px 0;
        border-radius: 20px;
        padding-left: 20px;

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
</style>