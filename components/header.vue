<template>
  <div>
    <div id="top__menu">
      <div id="top__menu-brand">
        <img src="../assets/images/brand.jpg" alt="/Brand" />
      </div>
      <div id="top__menu__company">
        <div class="top__menu__company-info">
          <div class="top__menu__company-title">Prosto z natury Sp. z o.o.</div>
          <ul class="top__menu__company-address">
            <li>ul. Lipowa 1/1, 11-100 Lidzbark Warmiński</li>            
          </ul>
        <ul class="top__menu__company-phone">
            <li><a href="tel:+48 89 378 22 41" rel="nofollow">tel.: +48 89 378 22 41</a></li>
            <li><a href="tel:+47 607 909 909" rel="nofollow">tel.: +47 607 909 909</a></li>
            <li><a href="mailto:poczta@prostoznatury.pl">poczta@prostoznatury.pl</a></li>
        </ul>
        </div>
        <div class="top__menu__company-social">
          <SocialMedia/>
        </div>
        <div class="top__menu__company-user">
          <div><NuxtLink to="/user/login">Logowanie/Zarejestruj</NuxtLink></div>
          <div class="basket-user">Koszyk<div class="basket-lenght">
            <NuxtLink to="/cart">{{ cartStore.cartTotalLength }}</NuxtLink>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div id="bottom__menu">
      <ul id="bottom__menu-list">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">O nas</NuxtLink></li>
        <li><NuxtLink to="/shop">Sklep</NuxtLink></li>
        <li><NuxtLink to="/send">Wysyłka</NuxtLink></li>
        <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SocialMedia from "./socialMedia.vue";
import { useCartStore } from '~~/stores/cartStore'
const cartStore = useCartStore()
</script>
<style lang="scss">
#top__menu {
  display: flex;
  flex-direction: column;
  min-height: 140px;
  height: auto;
  width: 100%;
}

#top__menu-brand {
  @include flex-center;
  min-height: 250px;
  height: auto;
  width: 100%;
}

#top__menu__company {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
}

.top__menu__company-title {
  font-size: $font-size-xxxl;
  font-family: "BloggerSansBold";
}

.top__menu__company-address {
  font-size: $font-size-m;
  margin-top: 10px;
}

.top__menu__company-phone {
    margin-top: 30px;
    & a {
      color: $white;
      &:hover {
        color: $yellow;
      }
    }
}

.top__menu__company-info,
.top__menu__company-social,
.top__menu__company-user {
  @include flex-center;
  flex-direction: column;
  width: 100%;
  min-height: 50px;
  height: auto;
  background-color: $primary-color-green;
  color: $white;
  font-size: $font-size-m;
}

.top__menu__company-info:first-child {
  text-align: center;
  width: 100%;
 
}

.top__menu__company-info ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

.top__menu__company-user div:first-child{
    margin-right: 20px; 
    & a {
      color: $white;
      transition: .2s;
      &:hover {
        color: $yellow;
        
      }
    }
    
}

#bottom__menu {
  @include flex-center;
  min-height: 70px;
  height: auto;
  width: 100%;
  margin-top: 5px;
}

#bottom__menu-list {
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0; 
  
    & a {
      color: $yellow;
      transition: .2s;  
      &:hover {
        color: $white;
      }
    }
}

#bottom__menu-list li {
  @include flex-center;
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid $yellow;
  color: $yellow;
  font-size: $font-size-m;
  text-transform: uppercase;
  background-color: $primary-color-green;
  cursor: pointer;
  margin: 0 2px;
  & a {
    color: $yellow;
  }  
}

#bottom__menu-list li:first-child {
  margin-left: 0;
}

#bottom__menu-list li:last-child {
  margin-right: 0;
}

.basket-user {
    position: relative; 
    z-index: 1;    
}

.basket-lenght {
    position: absolute;
    top: -15px;
    right: -52px;
    height: 30px;
    min-width: 30px;
    width: auto; 
    z-index: 0;  
    border: 1px solid $yellow;
    border-radius: 50%; 
    @include flex-center; 
    padding-right: 2px; 
    padding-top: 2px;
    cursor: pointer;  
    & a {
      color: $white;
      transition: .2s;
      &:hover {
        color: $yellow;
      }
    }         
}

@media only screen and (max-width: 600px) {
  #top__menu {
    flex-direction: column;
  }

  #top__menu-brand {
    max-height: 180px;  
    overflow: hidden;

    & img {
      display: block;
      width: auto;
      height: 100%;  
      background-size: contain;  
  }
}
    .top__menu__company-info, 
    .top__menu__company-user {
      padding: 20px 5px;      
    }

    .basket-user {
      margin-top: 30px;
    }

    #bottom__menu-list li{
      height: 40px;
      margin-bottom:1px;
    }


}

@media only screen and (min-width: 601px) {
  #top__menu {
    flex-direction: row;
  }
    #top__menu-brand {  
      & img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
.top__menu__company-info,
.top__menu__company-user {
  padding: 20px 5px;
}

.basket-user {
  margin-top: 30px;
}

#bottom__menu-list li {
  height: 40px;
  margin-bottom: 1px;
}
}
@media only screen and (min-width: 768px) {

  #top__menu-brand img {
    max-width: 100%;
  }
    .top__menu__company-info,
    .top__menu__company-user {
      padding: 50px 5px 0 5px;
    }
  
    .basket-user {
      margin-top: 0;
    }
  
    #bottom__menu-list li {
      width: 100%;
        height: 100%;
    }
}


@media only screen and (min-width: 768px) {
  .top__menu__company-social,
  .top__menu__company-user {
    display: flex;
    flex-direction: row;
    transition: .2s;
  }
}

@media only screen and (min-width: 768px) {
  #bottom__menu-list {
    flex-direction: row;
    height: 70px;
  }

  .top__menu__company-social,
  .top__menu__company-user {
    height: 25%;
    & a {
        color: $white;
        transition: 0,2s;
        &:hover {
          color: $yellow;
        }
      }
  }

  .top__menu__company-info:first-child {
    height: 50%;
  }
}
</style>
