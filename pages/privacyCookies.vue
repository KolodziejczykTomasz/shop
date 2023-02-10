<template>
   <Header />
   <section id="cookies">
      <p class="title">Polityka cookies</p>
      <p class="subtitle">Czym są cookies?</p>
      
     <p>Cookies to dane informatyczne, zwłaszcza niewielkie pliki tekstowe, zapisywane i przechowywane na urządzeniach, za pomocą których korzystasz z naszych serwisów.</p> 
      <p>Cookies administratora to nasze cookies, które wiążą się ze świadczeniem przez nas usług drogą elektroniczną za pośrednictwem naszych serwisów.</p>
      <p>Cookies zewnętrzne to cookies naszych partnerów, które wiążą się z korzystaniem przez nich ze strony internetowej naszego serwisu.Jak używamy cookies?</p>
      <p class="bold-font"> Wykorzystujemy dwa typy cookies:</p>
      
      
     <ol>
     <li>cookies sesyjne – które są przechowywane na Twoim urządzeniu i pozostają tam do momentu zakończenia sesji danej przeglądarki. Zapisane informacje są wówczas trwale usuwane z pamięci urządzenia. Mechanizm cookies sesyjnych nie pozwala na pobieranie jakichkolwiek danych osobowych ani żadnych informacji poufnych z Twojego urządzenia;
</li>
     <li>cookies trwałe – które są przechowywane na Twoim urządzeniu i pozostają tam, dopóki je skasujesz. Zakończenie sesji danej przeglądarki lub wyłączenie urządzenia nie powoduje ich usunięcia z tego urządzenia. Mechanizm cookies trwałych nie pozwala na pobieranie jakichkolwiek danych osobowych ani żadnych informacji poufnych z Twojego urządzenia. Trwałych cookies używamy, aby przechowywać:
      informacje o stronie startowej, którą preferujesz, informacje o Twoich ulubionych produktach.</li>
     </ol>
      
      <p>Używamy zarówno naszych cookies, jak i cookies podmiotów zewnętrznych, aby gromadzić statystyki oraz dane Twoje i innych użytkowników w formie zagregowanej oraz indywidualnej. Korzystamy przy tym z narzędzi analitycznych, dzięki którym możemy optymalizować naszą stronę i przedstawiać ofertę interesującą dla Ciebie.</p>      
      
      
         <p>Używamy także zewnętrznych cookies, które monitorują to, jak korzystasz z innych witryn. Dzięki temu możemy udostępniać nasze materiały marketingowe na innych stronach i w różnych kanałach komunikacji. Dlaczego wykorzystujemy cookies?</p>
      
         <p>Poniżej znajdziesz informacje o tym, co robimy przy użyciu cookies, aby ułatwić Ci korzystanie z naszego serwisu.</p>
      
     
      
      <p> Cookies wykorzystujemy, aby chronić Cię podczas Twoich wizyt w serwisie i ułatwiać Ci poruszanie się po nim.</p>  
      
      <p class="bold-font">Co możesz zrobić, gdy nie chcesz cookies?</p>
      <p> W każdym momencie możesz samodzielnie zmienić ustawienia dotyczące cookies i określić warunki, na jakich cookies są przechowywane na Twoim urządzeniu i uzyskują do niego dostęp. Ustawienia dotyczące cookies możesz zmienić za pomocą ustawień przeglądarki internetowej lub za pomocą konfiguracji usługi. Ustawienia te mogą przede wszystkim blokować automatyczną obsługę cookies w ustawieniach przeglądarki internetowej lub każdorazowo informować, że cookies zostały zamieszczone na Twoim urządzeniu. Szczegółowe informacje o możliwości i sposobach obsługi cookies znajdziesz w
      ustawieniach przeglądarki internetowej.</p>
           
      <p>W każdej chwili możesz usunąć cookies, korzystając z dostępnych funkcji w przeglądarce internetowej, której używasz.</p>
      
      <p>  Ograniczenie stosowania cookies może jednak wpłynąć na niektóre funkcjonalności serwisu. Dane – które przekazujemy firmom zewnętrznym – są używane wyłącznie do świadczenia usług opisanych w tym dokumencie. Za pomocą narzędzi analitycznych gromadzimy dane statystyczne, aby optymalizować naszą witrynę i przedstawiać w niej informacje, które mogą Cię zainteresować.</p>
    
   </section>
   <Footer />
</template>
<script setup >
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>

<style lang="scss" scoped>
#cookies { 
   font-size: $font-size-m;
   margin: 70px 20px;
   line-height: 25px;
   text-align: left;
   
   & p {
      display: block;
      width: 100%;
   }
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