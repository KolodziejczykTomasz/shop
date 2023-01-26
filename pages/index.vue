<template>
  <Header />
  <div>
    <SalesBar/>
    <section id="products">
        <Product
            v-for="(product, index) in products"  
            :title="product.title" 
            :price="product.price" 
            :urlImg="product.urlImg" 
            :key="index" 
        />
    </section>
  </div>
  <Footer />
</template>
<script setup>
import productsData from "../assets/data/products.json";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Product from "../components/product.vue";
import SalesBar from "../components/salesBar.vue";

const { product } = defineProps(['product']);

  const products = productsData;

</script>

<style lang="scss">
  #products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: auto;
    width: 100%;
    margin: 10px 0 70px 0;
  }
</style>
