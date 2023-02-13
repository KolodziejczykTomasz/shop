<template>
  <div id="footer">
    <div>
      <PromotionBar/>
      <div id="footer__menu-container">
        <div class="footer__menu-item left-margin">
          <p class="footer__menu-title">INFORMACJE:</p>
          <ul class="circle-list-style-green ">
            <li><NuxtLink to="/contact">Kontakt z nami</NuxtLink> </li>
            <li><NuxtLink to="/send">Warunki wysyłki</NuxtLink></li>
            <li><NuxtLink to="/rulesShop">Regulamin sklepu</NuxtLink></li>
            <li><NuxtLink to="/privacyPolicy">Polityka Prywatności</NuxtLink></li>
            <li>
              <NuxtLink to="/privacyCookies">Polityka Coookies</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__menu-item">
          <p class="footer__menu-title">MOJE KONTO:</p>
          <ul class="circle-list-style-green">            
            <li><NuxtLink to="/newsletter">Newsletter</NuxtLink></li>
            <li><NuxtLink to="/help">Pomoc</NuxtLink></li>
            <li class="hide" :class="{ show: storeAuth.auth }" >
              <NuxtLink to="/user/1">Moje dane</NuxtLink></li>
            <li class="hide" :class="{ show: storeAuth.auth }" >
              <NuxtLink to="/products/newProduct" >Dodaj produkt</NuxtLink>
            </li>
            <li class="hide" :class="{ show: storeAuth.auth }">
              <button @click="storeAuth.logoutUser" class="button-logoutUser">Wyloguj z aplikacji</button>
            </li>
            
          </ul>
          <p class="footer__menu-title">Dołącz do nas</p>
          <SocialMedia/>
        </div>
        <div class="footer__menu-item">
          <p class="footer__menu-title">KONTAKT Z NAMI:</p>
          <ul class="footer__menu-address">
            <li>Prosto z natury</li>
            <li>ul. Lipowa 1/1</li>
            <li>11-100 Lidzbark Warminski</li>
            <li>NIP: 5213668111</li>
          </ul>
          <ul class="footer__menu-phone">
              <li><a href="tel:+48 89 378 22 41" rel="nofollow">tel.: +48 89 378 22 41</a></li>
              <li><a href="tel:+47 607 909 909" rel="nofollow">tel.: +47 607 909 909</a></li>
              <li><a href="mailto:poczta@prostoznatury.pl">poczta@prostoznatury.pl</a></li>
          </ul>
          <p class="footer__menu-title">Bank</p>
          <ul class="footer__menu-account">
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
          <NuxtLink to="/privacyPolicy">Polityka prywatności </NuxtLink>| <NuxtLink to="/rulesShop"> Regulamin </NuxtLink>| <NuxtLink to="/send">Zwroty</NuxtLink>  | <NuxtLink to="/send"> Dostawa</NuxtLink>
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

import { useStoreAuth } from "~~/stores/storeAuth";
const storeAuth = useStoreAuth();
const { data: users } = useFetch('http://localhost:4000/users');



</script>
<style lang="scss" scoped>
#footer {
  min-height: 300px;
  height: auto;
  width: 100%; 
  font-size: $font-size-m;

  .hide {
    visibility: hidden;   
  
  }
  .show {
    visibility: visible;
  }
  .button-logoutUser{
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    transition: .2s;
    color: $primary-color-green;
    font-weight: $bold;
      &:hover {
        color: $yellow;
      }
  }
}
.footer__menu-address {
    list-style: none;
    margin-bottom: 20px;
    font-size: $font-size-s;
    color: $black;
    & a {
        color: $black;
        transition: .2s;
        &:hover {
          color: $yellow;
        }
    }
        
  }
.footer__menu-account {
  list-style: none;
    margin-top: 20px;
    font-size: $font-size-m;
}
.left-margin {
  padding-left: 15px;
}
#footer__company-politics {
  @include flex-center;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: $font-size-s;
  & a {
    padding: 0 5px;
    transition: .2s;
    &:hover {
      color: $yellow;
    }
  }
}



#footer .circle-list-style-green {
  list-style-type: circle;
  margin-left: 10px;
  margin-bottom: 20px;
  & a {
      color: $black;
      transition: .2s;
  
      &:hover {
        color: $yellow;
      }
    }
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
.footer__menu-phone {
  font-weight: $bold;
  color: $primary-color-green;
  list-style: none;
  margin-bottom:20px;
  & li a {
        color: $primary-color-green;  
      &:hover {
        color: $yellow;
      }
    }
}
@media only screen and (max-width: 400px) {
  #footer__menu-container {
    justify-content: center;
    align-items: center;
    .footer__menu-item, #copyright p { 
      width: 100%;
      
      @include flex-center;
      flex-direction: column;
    }
  }
    #copyright p {
      height: 100%;
      @include flex-center;
    }

  #footer__company {
    @include flex-center;
    flex-direction: column;
    margin: 10px 0;
  }
}

@media only screen and (max-width: 566px) {
  #footer__menu-container {
    justify-content: center;
    align-items: center;
    .footer__menu-item, #copyright p { 
      width: 100%;
      
      @include flex-center;
      flex-direction: column;
    }
  }
    #copyright p {
      height: 100%;
      @include flex-center;
    }

  #footer__company {
    @include flex-center;
    flex-direction: column;
    margin: 10px 0;
  }
}

  .footer__menu-item:last-child {
    width: 40%;
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

@media only screen and (min-width: 567px) {
  #footer__company {
    flex-direction: row;
  }
}
@media only screen and (min-width: 568px) {
  .footer__menu-item {
    width: 20%;
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
