<template>
   <Header />
   <section id="privacyPolicy">
      <p class="title">Polityka Prywatności dla użutkowników sklepu "Prosto z natury"</p>
      <p class="subtitle">Dbamy o Twoją prywatność od 25 maja 2018 roku w całej Unii Europejskiej obowiązuje nowe Rozporządzenie o Ochronie Danych Osobowych (RODO). W tym dokumencie opisujemy usługi, które świadczymy, oraz wyjaśniamy, jak chronimy Twoją prywatność. Piszemy też, jak możesz
      korzystać ze swoich praw do danych, które zgromadziliśmy.</p>
      <ul>
         <li>
            <p>Administrator danych osobowych</p>
            <p>
               Prosto z natury sp. z o.o. z siedzibą w Lidzbarku Warmińskim przy ulicy Lipowej 1/1.
            </p>
         </li>
         <li>
            <p>Ogólne zasady przetwarzania danych osobowych</p>
            <ul>
               <li>
                  <p>Gdzie przechowujemy Twoje dane</p>
                  <p>Twoje dane osobowe przechowujemy na terenie Europejskiego Obszaru Gospodarczego (EOG). Mogą być one także przesyłane poza ten obszar i tam przetwarzane. Zawsze gdy przesyłamy dane, robimy to zgodnie z obowiązującym prawem. Jeśli
            przekazujemy dane poza EOG, stosujemy standardowe klauzule umowne oraz Tarczę Prywatności, które zabezpieczają te dane poza EOG</p>
               </li>
               <li>
                  <ul>
                     <li>
                        <p>Kto ma dostęp do Twoich danych</p>
                        <p>Do Twoich danych mają dostęp tylko te podmioty, które nimi zarządzają. To oznacza, że nigdy nie przekazujemy Twoich danych w celach marketingowych, nie sprzedajemy ich ani nie wymieniamy się
            nimi z innymi podmiotami zewnętrznymi.</p>
                     </li>
                     <li>
                        <p>Twoje dane przekazujemy wybranym podmiotom zewnętrznym – gdy realizujemy usługi, które zdefiniowaliśmy, i tylko w zakresie, w jakim możemy powierzyć ich przetwarzanie na podstawie podpisanych przez nas umów. Szczegółowe informacje na
            temat tych podmiotów zewnętrznych znajdziesz niżej.</p>                       
                     </li>                     
                  </ul> 
               </li>
               <li>
                  <p>Jakie są podstawy prawne przetwarzania danych</p>
                  <p>Przetwarzamy Twoje dane osobowe na mocy umowy. Jej wzór znajdziesz w regulaminie naszych serwisów lub regulaminach
            promocji, konkursów, loterii itp., które dla Ciebie organizujemy. Twoje dane przetwarzamy tylko w takim zakresie, jaki
            jest potrzebny, aby właściwie zrealizować usługę, którą Ci świadczymy.
            Czasem, na przykład aby dopasować usługę do Twoich potrzeb, możemy poprosić Cię o podanie dodatkowych danych. Twoja
            zgoda na to jest, oczywiście, dobrowolna. Każdą udzieloną nam zgodę możesz odwołać.</p>
               </li>
               <li>
                  <p>Uaktualnienia naszej polityki prywatności</p>
                  <p>Zawsze gdy uaktualnimy politykę prywatności, jej najnowszą wersję zamieścimy na naszej stronie internetowej w zakładce
            polityka prywatności.</p>
               </li>              
            </ul>
         </li>           
      </ul>
   </section>
   <Footer />
</template>
<script setup >
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
useHead({
   title: 'Polityka prywatności',
   meta: [{ name: 'description', content: 'Polityka prywatności' }]
})
</script>

<style lang="scss" scoped>
#privacyPolicy {
   @include flex-center;
   flex-direction: column;
   font-size: $font-size-m;
   margin: 70px 20px;

   & ul {
      line-height: 25px;
      padding: 0 20px;
      & li {
         font-size: $font-size-m;
        
         & p {
            font-size: $font-size-m;
            padding: 10px 0;  
            font-weight: normal;        
         }
      }

   }

   .title {  
      font-weight: $bold;  
      font-size: $font-size-xl;
      padding-bottom: 50px;
   }    
     .subtitle {
      padding-top: 20px;
         padding-bottom: 50px;
         font-size: $font-size-m;
      }
   }
</style>