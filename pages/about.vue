<template>
    <Header />
    <section id="about">
        <p class="title">Poznaj nas</p>
        <p>Tata Mariusz - to on rozpoczął naszą pszczelą produkcję. Dzięki wieloletniej pasji oraz pracowitości możemy poszczycić się tradycją, o którą zaczynają dbać synowie- kolejne pokolenie w naszym rodzinnym przedsięwzięciu.</p>
<p>Syn Karol - twórca sklepu internetowego oraz osoba odpowiedzialna za prowadzenie marketingu na miarę możliwości małej rodzinnej firmy.
</p>

<p>Syn Łukasz - adept pszczelarstwa w rodzinnej firmie, kontynuator wieloletniej tradycji. Ponadto wizjoner oraz kreator identyfikacji graficznej naszej marki.</p>
<p>Jesteśmy wdzięczni, że możemy liczyć na wszystkie bliskie nam osoby, dzięki którym możemy nieustannie realizować naszą misję i dostarczać Państwu najlepsze produkty pszczele. Jesteśmy przekonani, że wielopokoleniowe doświadczenie oraz zaufanie wśród wieloletnich Klientów.</p>


    </section>
    <Footer />
</template>
<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>

<style lang="scss">
#about {
    font-size: $font-size-m;
    margin: 70px 20px;
    line-height: 25px;
    text-align: left;

    & .title {
        font-size: $font-size-xl;
        font-weight: $bold;
        text-align: center;
        padding-bottom: 20px;
    }

    & .subtitle {
        padding-top: 20px;
        padding-bottom: 50px;
        text-align: center;
        font-size: $font-size-m;
    }
    & p {
        display: block;
        width: 100%;
    }
    & .bold-font {
        font-weight: $bold;
    }

    & ol {
        line-height: 30px;
        padding: 0 20px;
        padding-bottom: 20px;
    }

    & p {
        font-size: $font-size-m;
        padding-bottom: 20px;
        font-weight: normal;
        text-align: left;
    }
}
</style>