<template>
    <Header />
    <section id="send">
        <p>Warunki wysyłki</p>
        <ol>
        <li>Towary dostarczane są wyłącznie terytorium Polski.</li>  
        <li>Koszty dostawy zależą od wybranego przez Klienta sposobu dostawy, od ilości i wartości zamówienia i wskazywane są
        Klientowi na Stronie podczas dokonywania przez Klienta wyboru sposobu dostawy Towaru.</li>
        <li>Całkowity koszt zamówienia, obejmujący cenę Towaru i koszty jego dostawy, wskazywany jest Klientowi, przed złożeniem
        przez niego zamówienia, na Stronie w Koszyku.</li>
        <li>Towary dostarczane są za pośrednictwem kuriera. Klient może także odebrać Towar osobiście w przedsiębiorstwie
        Sprzedawcy.Odbioru osobistego Towaru należy dokonać w terminie 5 dni roboczych od dnia powiadomienia Klienta przez
        Sprzedawcę o gotowości Towaru do odbioru.</li>
        <li>Wyboru sposobu dostawy Klient dokonuje podczas składania zamówienia.</li>
        <li>W uzasadnionych wypadkach zakupione Towary mogą zostać dostarczone w dwóch dostawach, o czym Klient zostanie
        niezwłocznie poinformowany telefonicznie lub e-mailem. Podział dostawy na dwie części nie powoduje zwiększenia kosztów
        dostawy.</li>
        </ol>        
    </section>
    <Footer />
</template>
<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
useHead({
    title: 'Regulamin wysyłki',
    meta: [{ name: 'description', content: 'Regulamin wysyłki' }]
})
</script>

<style lang="scss" scoped>
#send {
    @include flex-center;
    flex-direction: column;
    font-size: $font-size-m;
    margin: 70px 20px;
    & ol {
        line-height: 30px;
        padding: 0 20px;
    }
    & p {
        font-size: $font-size-xl;
        font-weight: $bold;
        padding-bottom: 50px;
    }
}
</style>