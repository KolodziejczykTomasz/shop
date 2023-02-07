<template>
    <Header />
    <section id="login">
        <p class="title">Logowanie</p> 
        <div class="login__form">
            <form autocomplete="off" @submit.prevent="loginUserToApp()">
                <input type="email" name="email" v-model="loginUser.email" placeholder="Wpisz swój adres email" required />
                <input type="password" name="password" v-model="loginUser.password" placeholder="Hasło" required />
               
                <button type="submit">Zaloguj</button>
            </form>
        </div>
       <NuxtLink to="/user/newUser"> <span> Rejestracja nowego użytkownika</span></NuxtLink>
    </section>
    <Footer />
</template>
<script setup lang="ts">
    import Header from "../../components/header.vue";
    import Footer from "../../components/footer.vue";

    import { useCartStore } from "~~/stores/cartStore";

    const cartStore = useCartStore()
    cartStore.getCart();

    interface loginUser {
        email: string,
        password: string,
        
    }

    const loginUser: loginUser = { email: "", password: ""};
    const loginUserToApp = async () => {
        await cartStore.submitLoginForm(loginUser)
        setTimeout(() => {
            alert("Logowanie udane");
        }, 1000)
    }
</script>

<style lang="scss">
#login { 
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
.login__form form {
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