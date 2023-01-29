<template>
  <Header />
  <div>
    <SalesBar/>
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
<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Product from "../components/product.vue";
import SalesBar from "../components/salesBar.vue";
import { useCartStore } from "@/stores/cartStore";
const { data: products } = await useFetch('http://localhost:4000/products');

const cartStore = useCartStore()
cartStore.getCart()

</script>

<style lang="scss" scoped>
#products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    width: 100%;
    margin: 10px 0 70px auto;   
      & #products div:last-child {
          flex-wrap: none;
          border: 2px solid red;
        }
  }
    @media only screen and (max-width: 767px) {
      #products {          
        justify-content: space-between;
        padding: 0 40px;
      }
    }
    @media only screen and (max-width: 667px) {
      #products {
        justify-content: center;           
      }
    }
</style>
