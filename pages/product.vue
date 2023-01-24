<template>
  <Header/>
    <section id="product__view">
      <div class="product__view__parametr">
        <div class="product__view__parametr-photo">
          <img src="" alt="Zdjęcie produktu" />
        </div>
        <div class="product__view__parametr__details">
          <p class="product__view__parametr__details-name">Świeca z wosku pszczelego</p>
          <p class="product__view__parametr__details-price">15zł</p>
          <div class="product__view__parametr__details-amount">
            <button>-</button>
            <p>1</p><button>+</button>
          </div>
          <p class="product__view__parametr__details-availability">Dostępność: 15 sztuk</p>
          <p class="product__view__parametr__details-add">
            <button class="product__view__parametr__details-button">Dodaj do koszyka</button>
          </p>
        </div>
      </div>
      <div class="product-description">Mam dla Państwa na sprzedaż świece "bubble" z naturalnego wosku pszczelego :)

        Świece z wosku pszczelego spalają się bezdymowo. Wydzielane z płomienia świecy ujemne jony oczyszczają powietrze
        oraz
        łagodząc dolegliwości nieżytu górnych dróg oddechowych, chorób płuc, astmy i alergii.

        Świece mają ok. 35g i spalają się przez 4-5h.</div>
    </section>
    <section id="products__related">
      <div id="products__related-bar">
        <p>Podobne produkty</p>
      </div>
      <div id="products__related-wrapper">
        <Product/>
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  <Footer/>
</template>
<script>
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue';
  import Product from '../components/product.vue';
</script>

<style lang="scss">
#product__view {
  margin: 30px 0;
  min-height: 500px;
  height: auto;
  width: 100%;
}

.product-description {
  min-height: 100px;
  height: auto;
  width: 100%;
  font-size: $font-size-m;
  line-height: 24px;
  margin-top: 20px;
  padding: 0 5px;
}

.product__view__parametr {
  display: flex;
  flex-direction: column;
    & .product__view__parametr-photo {
    @include flex-center;
    width: 100%;
    border: 1px solid $primary-color-green;
    & img {
        @include flex-center;
        max-height: 320px;
        max-width: 320px;
        width: 100%;
        height: 100%;
        border: 1px solid red;
      }
  }
    & .product__view__parametr__details {
      display: flex;
      flex-direction: column;
      margin-left: 35px;
      width: 100%;
    }
}



@media only screen and (min-width: 768px) {
  .product__view__parametr {
    flex-direction: row;
  }

  .product__view__parametr-photo {
    max-width: 500px;
    width: auto;
  }
}



.product__view__parametr__details-name {
  font-size: $font-size-xl;
  padding-top: 20px;
  margin-bottom: 20px;
  font-weight: $bold;
}

.product__view__parametr__details-price,
.product__view__parametr__details-amount,
.product__view__parametr__details {
  font-size: $font-size-m;
  margin-top: 15px;
  margin-bottom: 15px;
}

.product__view__parametr__details-amount {
  display: flex;
  justify-content: flex-start;
}

.product__view__parametr__details-availability {
  margin-top: 10px;
  margin-left: -5px;
}

.product__view__parametr__details-amount button {
  height: 20px;
  width: 20px;
  margin: 0 5px;
}

.product__view__parametr__details-amount button:first-child {
  margin-left: -5px;
}

.product__view__parametr__details-amount button p {
  padding: 10px;
}

.product__view__parametr__details-button {
  @include flex-center;
  border: 2px solid $yellow;
  border-radius: 30px;
  color: $yellow;
  font-size: $font-size-s;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 150px;
  background-color: $primary-color-green;
  margin-left: -10px;
  margin-top: 40px;
}

#products__related-bar {
      @include flex-center;
      height: 70px;
      width: 100%;      
      font-size: $font-size-l;
      color: $yellow;
      background-color: $primary-color-green;
}

#products__related {
  margin-bottom: 70px;
    & #products__related-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      height: auto;
      width: 100%;   
  }
}


</style>
