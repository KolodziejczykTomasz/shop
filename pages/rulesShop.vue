<template>
   <Header />
   <section class="rulesShop">
      <p>Regulamin sklepu</p>
      <ol>
      <li>Sprzedawca prezentuje na Stronie Towary, ich opisy, cenniki i inne informacje dotyczące Towarów z asortymentu Sklepu.
      Treści te nie stanowią oferty, lecz stanowią zaproszenie do zawarcia umowy, zgodnie z art. 71 KC.</li>
      <li>Treści prezentowane na Stronie, w szczególności utwory graficzne i słowne, są chronione prawem autorskim. Użytkownik nie
      może wykorzystywać żadnej zamieszczonej na Stronie treści, ani w całości ani w części, ani w formie oryginalnej ani w
      formie opracowania, do celów innych niż własny użytek osobisty. Użytkownik nie może również w inny sposób dystrybuować,
      zmieniać, ponownie wykorzystywać lub umieszczać na innych stronach jakiejkolwiek części Strony bez zgody uprawnionego.</li>
      <li>Ceny Towarów są cenami brutto (zawierają podatek VAT) i wyrażone są w polskich złotych (PLN).</li>
      <li>Ceny Towarów nie obejmują kosztów ich dostawy.</li>
      <li>Sprzedawca może zmieniać ceny Towarów w Sklepie. Zmiana ceny Towaru pozostaje bez wpływu na cenę należną Sprzedawcy na
      podstawie zamówienia złożonego przed dokonaniem przez Sprzedawcę zmiany ceny Towaru w Sklepie</li>
      <li>Ceny podane na Stronie obowiązują jedynie w Sklepie.</li>
      <li>Klient może wybierać spośród następujących sposobów płatności za Towar: a) Płatność kartą kredytową, b) płatność
      przelewem błyskawicznym</li>
      </ol>
   </section>
   <Footer />
</template>
<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
useHead({
   title: 'Regulamin sklepu',
   meta: [{ name: 'description', content: 'Regulamin sklepu' }]
})
</script>

<style lang="scss" scoped>
.rulesShop {
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