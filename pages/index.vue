<template>
  <Header/>
  <div>
    <section id="cta">
      <div class="cta-text">Wiosenna wyprzedaż towaru</div>
      <div class="cta-button"><button>Zobacz</button></div>
    </section>
    <section id="products">
      <Product/>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  </div>
  <Footer/>
</template>
<script>
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue'; 
  import Product from '../components/product.vue';
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


#cta {
  @include flex-center;
  border: 1px solid $primary-color-green;
  background: $primary-color-green;
  @include background-gradient;
  flex-direction: column;
  height: 100px;
  width: 100%;
  margin: 30px 0 15px 0;
  
}

@media only screen and (min-width: 768px) {
  #cta {
    flex-direction: row;
  }

}

.cta-text {
  @include flex-center;
  height: 100px;
  width: 100%;
  font-size: $font-size-xl;
  text-transform: uppercase;
  color: $yellow;
}

.cta-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  width: 100%;
}

.cta-button button {
  display: block;
  right: 30px;
  width: auto;
  padding: 15px 30px;
  border: none;
  text-transform: uppercase;
  font-size: $font-size-m;
  background: $primary-color-green;
  color: $yellow;
  z-index: 1;
  letter-spacing: 1.2px;
  border: 1px solid $primary-color-green;
  margin-right: 70px;
}



@media only screen and (min-width: 768px) {
    .cta-text {
    width: 60%;
  }

    .cta-button {
    width: 40%;
  }
}
</style>
