<template>
    <Header />
    <section id="user">
        <p class="title">Moje konto</p>
        <ul>
        <li>Imię i nazwisko: Jan Nowak</li>
        <li>Adres: Dobre Miasto</li>
        <li>Telefon: +48 456 345 123</li>
        </ul>

    </section>
    <Footer />
</template>
<script setup >
    import Header from "../../components/header.vue";
    import Footer from "../../components/footer.vue";
</script>

<style lang="scss">
#user {
    font-size: $font-size-m;
    margin: 70px 20px;
    line-height: 25px;
    text-align: left;
   & .title {
        font-size: $font-size-xl;
        font-weight: $bold;
        text-align: center;
        padding-bottom: 70px;
    }
 
  & p {
        font-size: $font-size-m;
        padding-bottom: 20px;
        font-weight: normal;
        text-align: left;
        display: block;
        width: 100%;
    }
   
    & ul {
        line-height: 30px;
        padding: 0 20px;
        padding-bottom: 20px;
    }

  
}
</style>