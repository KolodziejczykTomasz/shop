<template>
  <Header/>
    <section id="basket">
      <BasketProduct/>
      <BasketProduct />
      <BasketProduct />
      <div class="grand-total">
        Łączna wartość zamówienia: 35zł
      </div>
    </section>
  <Footer/>
</template>
<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import BasketProduct from '../components/basketProduct.vue';
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
