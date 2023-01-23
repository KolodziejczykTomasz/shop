<template>
  <Header/>
  <div>
    <section id="cta">
      <div class="cta-text">Wiosenna wyprzedaż towaru</div>
      <div class="cta-button"><button>Zobacz</button></div>
    </section>
    <section id="products">
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
      <div class="product__item">
        <div class="product__item-photo">
          <img src="" alt="świeca z wosku pszczelego" />
        </div>
        <div class="product__item-name">Świeca z wosku pszczelego</div>
        <div class="product__item-price">15zł</div>
      </div>
    </section>
  </div>
  <Footer/>
</template>
<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
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

.product__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 250px;
  max-height: 400px;
  margin: 15px 5px;
  cursor: pointer;
  -webkit-box-shadow: 0 0 14px - 4px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0 0 14px - 4px rgba(194, 194, 194, 1);
  box-shadow: 0 0 14px - 4px rgba(194, 194, 194, 1);
}

@media only screen and (min-width: 768px) {
       .product__item {
    width: 24%;
  }
}

.product__item:hover {
  -webkit-box-shadow: 0 0 21px - 4px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0 0 21px - 4px rgba(194, 194, 194, 1);
  box-shadow: 0 0 21px - 4px rgba(194, 194, 194, 1);
}

.product__item-photo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 280px;
  margin: 0 auto;
}

.product__item-name {
  height: 70px;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product__item-price {
  height: 50px;
  width: 100%;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
}



#cta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100%;
  margin: 30px 0 15px 0;
  border: 1px solid #55a602;
  background: rgb(85, 166, 2);
  background: linear - gradient(90deg, rgba(85, 166, 2, 1) 49%, rgba(255, 255, 255, 1) 100%);
}

@media only screen and (min-width: 768px) {
  #cta {
    flex-direction: row;
  }

}

.cta-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  font-size: 2.2rem;
  text-transform: uppercase;
  color: #efca36;
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
  font-size: 1.6rem;
  background: #55a602;
  color: #efca36;
  z-index: 1;
  letter-spacing: 1.2px;
  border: 1px solid #55a602;
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
