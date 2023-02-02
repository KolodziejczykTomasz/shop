<template>
  <Header/>
    <section id="basket">
      <CartProduct v-for="(product, index) in cartStore.cart"  
              :product = product
              :key="index" 
          />       
      <div class="grand-total">
        Łączna wartość zamówienia: {{ cartStore.cartTotal }}zł
      </div>
    </section>
    <GoToPayBar/>
  <Footer/>
</template>
<script setup lang="ts">
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import GoToPayBar from '../components/goToPayBar.vue';
import CartProduct from '../components/cartProduct.vue';

import { useCartStore } from "@/stores/cartStore";
const cartStore = useCartStore()
cartStore.getCart()

</script>

<style lang="scss">
#basket {
  min-height: 200px;
  height: auto;
  width: 100%;
  padding: 50px 90px 50px 90px;
  margin: 30px 0; 
}

.grand-total {
  border-top: 2px solid $primary-color-green;
  text-align: right;
  font-size: $font-size-m;
  font-weight: $bold;
  color: $primary-color-green;
}
</style>
