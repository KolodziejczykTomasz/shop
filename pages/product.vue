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
      <div id="products__related-header">
        <p>Podobne produkty</p>
      </div>
      <div id="products__related-wrapper">
        <div class="products__related__item">
          <div class="products__related__item-photo">
            <img scr="" alt="świeca z wosku pszczelego" />
          </div>
          <div class="products__related__item-name">Świeca z wosku pszczelego</div>
          <div class="products__related__item-price">15zł</div>
        </div>
        <div class="products__related__item">
          <div class="products__related__item-photo">
            <img scr="" alt="świeca z wosku pszczelego" />
          </div>
          <div class="products__related__item-name">Świeca z wosku pszczelego</div>
          <div class="products__related__item-price">15zł</div>
        </div>
        <div class="products__related__item">
          <div class="products__related__item-photo">
            <img scr="" alt="świeca z wosku pszczelego" />
          </div>
          <div class="products__related__item-name">Świeca z wosku pszczelego</div>
          <div class="products__related__item-price">15zł</div>
        </div>
        <div class="products__related__item">
          <div class="products__related__item-photo">
            <img scr="" alt="świeca z wosku pszczelego" />
          </div>
          <div class="products__related__item-name">Świeca z wosku pszczelego</div>
          <div class="products__related__item-price">15zł</div>
        </div>
      </div>
    </section>
  <Footer/>
</template>
<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
</script>

<style lang="scss">
#product__view {
  margin: 30px 0;
}

#products__related {
  margin-bottom: 70px;
}

#products__related-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: auto;
  width: 100%;
}

.products__related__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 250px;
  max-height: 400px;
  margin: 15px 5px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 14px -4px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0px 0px 14px -4px rgba(194, 194, 194, 1);
  box-shadow: 0px 0px 14px -4px rgba(194, 194, 194, 1);
}

@media only screen and (min-width: 768px) {
  .products__related__item {
    width: 24%;
  }
}

.products__related-item:hover {
  -webkit-box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
  box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
}

.products__related__item-photo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 280px;
  margin: 0 auto;
}

.products__related__item-name {
  height: 70px;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.products__related__item-price {
  height: 50px;
  width: 100%;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
}

#products__related-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  color: #efca36;
  font-size: 2rem;
  background: rgba(85, 166, 2, 1);
  background-color: #55a602;
}


#product__view {
  min-height: 500px;
  height: auto;
  width: 100%;
}

.product-description {
  min-height: 100px;
  height: auto;
  width: 100%;
  font-size: 1.8rem;
  line-height: 24px;
  margin-top: 20px;
  padding: 0 5px;
}

.product__view__parametr {
  display: flex;
  flex-direction: column;
}

.product__view__parametr-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #55a602;
}

.product__view__parametr__details {
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  width: 100%;
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

.product__view__parametr-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  min-width: 320px;
}

.product__view__parametr__details-name {
  font-size: 2.2rem;
  padding-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
}

.product__view__parametr__details-price,
.product__view__parametr__details-amount,
.product__view__parametr__details {
  font-size: 1.8rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #efca36;
  border-radius: 30px;
  color: #efca36;
  display: block;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 150px;
  background-color: #55a602;
  margin-left: -10px;
  margin-top: 40px;
}
</style>
