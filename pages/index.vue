<template>
  <Header />
  <div>
    <SalesBar/>
    <section id="products">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  </div>
  <Footer />
</template>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Product from "../components/product.vue";
import SalesBar from "../components/salesBar.vue";
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
