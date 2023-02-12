<template>
  <Header/>
    <section id="order">
      <div class="orderNumber">Zamówienie nr 1</div>
      <CartProduct v-for="(product, index) in cartStore.cart"  
              :product = product
              :key="index" 
          />       
      <div class="grand-total">
        Łączna wartość zamówienia: {{ cartStore.cartTotal }}zł
      </div>
      <div>
        <div class="discountForm">
          <input type="text" name="discount" v-model="discountInput.value" />
          <button @click="getDiscount()">Użyj kodu rabatowgo</button>
        </div>
      </div>
    </section>
  <Footer/>
</template>
<script setup lang="ts">
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import CartProduct from '../components/cartProduct.vue';

import { useCartStore } from "~~/stores/cartStore";
const cartStore = useCartStore()
cartStore.getCart()

interface discountInput {
  value: string
}
const discountInput: discountInput = { value: "" };

const { data: discount } = await useFetch("http://localhost:4000/discount");
const getDiscount = () =>{
  console.log(discount)
}
useHead({
  title: 'Zamówienie',
  meta: [{ name: 'description', content: 'Twoje zamówienie' }]
})
</script>

<style lang="scss" scoped>
#order {
  flex-direction: row;
  min-height: 200px;
  height: auto;
  width: 100%;
  padding: 50px 90px 50px 90px;
  margin: 30px 0; 
  & .orderNumber {
    text-align: center;
    width: 100%;
    font-size: $font-size-xxl;
    margin-bottom: 100px;
  }
}

.grand-total {
  border-top: 2px solid $primary-color-green;
  text-align: right;
  font-size: $font-size-m;
  font-weight: $bold;
  color: $primary-color-green;
}

.discountForm {
  @include flex-center;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 70px;

  & input {
    display: flex;
    width: 200px;
    max-width: 80%;
    height: 40px;
    margin: 15px 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 20px;
    border: 2px solid $primary-color-green;

    &:focus {
      border: 2px solid $primary-color-green !important;
    }
  }

  & button {
    @include flex-center;
    border: 2px solid $yellow;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: $yellow;
    display: flex;
    font-size: $font-size-s;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 200px;
    margin: 20px 0 20px 3px;
    background-color: $primary-color-green;
    transition: .2s;

    &:hover {
      color: $white;
    }
  }


}
</style>
