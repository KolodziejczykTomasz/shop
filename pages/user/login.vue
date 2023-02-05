<template>
    <Header />
    <section id="login">
        <p class="title">Logowanie/rejestracja</p> 
    </section>
    <Footer />
</template>
<script setup >
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
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

   

}
</style>