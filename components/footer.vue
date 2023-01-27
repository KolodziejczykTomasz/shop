<template>
  <div id="footer">
    <div>
      <PromotionBar/>
      <div id="footer__menu-container">
        <div class="footer__menu-item">
          <p class="footer__menu-title">INFORMACJE:</p>
          <ul class="circle-list-style-green">
            <li>Kontakt z nami</li>
            <li>Warunki wysyłki</li>
            <li>Regulamin sklepu</li>
            <li>Polityka Prywatności</li>
          </ul>
        </div>
        <div class="footer__menu-item">
          <p class="footer__menu-title">MOJE KONTO:</p>
          <ul class="circle-list-style-green">
            <li>Moje dane</li>
            <li>Newsletter</li>
            <li>Pomoc</li>
          </ul>
          <p class="footer__menu-title">Dołącz do nas</p>
          <SocialMedia/>
        </div>
        <div class="footer__menu-item">
          <p class="footer__menu-title">KONTAKT Z NAMI:</p>
          <ul>
            <li>Prosto z natury</li>
            <li>ul. Lipowa 1/1</li>
            <li>11-100 Lidzbark Warminski</li>
            <li>NIP: 5213668111</li>
          </ul>
          <ul class="footer__menu-phone">
            <li>tel: +48 89 378 22 41</li>
            <li>tel. +47 607 909 909</li>
            <li>poczta@prostoznatury.pl</li>
          </ul>
          <p class="footer__menu-title">Bank</p>
          <ul>
            <li>ING Bank Śląski:</li>
            <li>95 1050 0000 1000 0091 0000 1111</li>
          </ul>
        </div>
        <div class="footer__menu-item">
          <Newsletter/>
          <p class="methodPay-title">Formy płatności</p>
          <MethodPay/>          
        </div>
      </div>
      <div id="footer__company">
        <div id="footer__company-name">Prosto z natury Sp. z o.o.</div>
        <div id="footer__company-politics">
          Polityka prywatności | Regulamin | Zwroty | Dostawa
        </div>
      </div>
    </div>
    <div id="copyright">
      <p>Copyright@2023</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import MethodPay from "./methodPay.vue";
  import SocialMedia from "./socialMedia.vue";
  import PromotionBar from "./promotionBar.vue";
  import Newsletter from "./newsletter.vue";
</script>
<style lang="scss">
#footer {
  min-height: 300px;
  height: auto;
  width: 100%;
  & ul {
    list-style: none;
    margin-bottom: 20px;
    font-size: $font-size-m;
  }
}

.footer__menu-phone {
  color: $primary-color-green;
  font-weight: $bold;
}

#footer .circle-list-style-green {
  list-style-type: circle;
  margin-left: 10px;
}

#footer ul.circle-list-style-green li::marker {
  color: $primary-color-green;
}

#footer__menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 30px;
}

.footer__menu-item {
  width: 100%;
  min-width: 200px;
  height: 100%;
  min-height: 290px;
}

@media only screen and (min-width: 768px) {
  .footer__menu-item {
    width: 20%;
  }

  .footer__menu-item:last-child {
    width: 40%;
  }
}

.footer__menu-title {
  font-size: $font-size-m;
  margin-bottom: 15px;
  font-family: "BloggerSansBold";
}

#footer__company {
  @include flex-center;
  align-items: center;
  width: 100%;
  height: 40px;
}

@media only screen and (min-width: 768px) {
  #footer__company {
    flex-direction: row;
  }
}

#footer__company-name {
  @include flex-center;
  width: 50%;
  height: 100%;
  font-size: $font-size-m;
  color: $primary-color-green;
  font-family: "BloggerSansBold";
}

.methodPay-title{
  font-size: $font-size-s;
}

.footer__menu-content {
  font-size: $font-size-s;
}

#footer__company-politics {
  @include flex-center;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: $font-size-s;
}

#copyright {
  height: 30px;
  color: $white;
  background-color: $primary-color-green;
  font-size: $font-size-sx;
  & p {
    text-align: center;
  }
}

@media only screen and (min-width: 768px) {
  #copyright {
    @include flex-center;
  }
}
</style>
