<template>
  <Header />
  <div>
    <SalesBar />
    <section id="products">
      <Product
        v-for="(product, index) in products.slice(0, 8)"
        :product = product
        :key="index"
      />
    </section>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Product from "../components/product.vue";
import SalesBar from "../components/salesBar.vue";

import { useCartStore } from "~~/stores/cartStore";
const { data: products } = await useFetch("http://localhost:4000/products");

const cartStore = useCartStore();
cartStore.getCart();
useHead({
  title: 'Home | Prosto z natury',
  meta: [{ name: 'description', content: 'Nasze produkty.' }] 
})
</script>

<style lang="scss" scoped>

#products {
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 20px;
  height: auto;
  width: 100%;
  margin: 40px auto;
}

@media only screen and (max-width: 550px) {
  #products {
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 40px;
  }
}
@media only screen and (min-width: 551px) {
  #products {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
  }
}
@media only screen and (min-width: 990px) {
  #products {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 40px;
  }
}

@media only screen and (min-width: 1200px) {
  #products {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
