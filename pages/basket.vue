<template>
  <Header/>
    <section id="basket">
      <div class="basket__product">
        <div class="basket__product-photo">
          <img src="" alt="Zdjęcie produktu" />
        </div>
        <div class="basket__product-name">
          <p>Świeca z wosku pszczelego w kształcie choinki</p>
        </div>
        <div class="basket__product-quantity">
          <div class="basket__product-amount">
            <p>35zł</p>
            <button>+</button>
            <p>1</p>
            <button>-</button>
            <button class="basket__product__button-delete">x</button>
          </div>
        </div>
      </div>
      <div class="basket__product">
        <div class="basket__product-photo">
          <img src="" alt="Zdjęcie produktu" />
        </div>
        <div class="basket__product-name">
          <p>Świeca z wosku pszczelego w kształcie choinki</p>
        </div>
        <div class="basket__product-quantity">
          <div class="basket__product-amount">
            <p>35zł</p>
            <button>+</button>
            <p>12</p>
            <button>-</button>
            <button class="basket__product__button-delete">x</button>
          </div>
        </div>
      </div>
      <div class="basket__product">
        <div class="basket__product-photo">
          <img src="" alt="Zdjęcie produktu" />
        </div>
        <div class="basket__product-name">
          <p>Świeca z wosku pszczelego w kształcie choinki</p>
        </div>
        <div class="basket__product-quantity">
          <div class="basket__product-amount">
            <p>35zł</p>
            <button>-</button>
            <p>1</p>
            <button>+</button>
            <button class="basket__product__button-delete">x</button>
          </div>
        </div>
      </div>
      <div class="grand-total">
        Łączna wartość zamówienia: 35zł
      </div>
    </section>
  <Footer/>
</template>
<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
</script>

<style lang="scss">
#basket {
  min-height: 200px;
  height: auto;
  width: 100%;
  padding: 50px 90px 50px 90px;
  margin: 30px 0;
}

.basket__product {
  display: flex;
  height: 82px;
  margin: 10px 0;
}

.basket__product-photo {
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
}

.basket__product-photo img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  border: 1px solid red;
}

.basket__product-name {
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
}

.basket__product-quantity {
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.basket__product-quantity div:first-child {
  width: 100%;
  text-align: right;
  padding-right: 30px;
}

.basket__product-amount {
  display: flex;
  font-size: 1.8rem;
  justify-content: flex-end;
}

.basket__product-amount p:first-child {
  margin-right: 30px;
  font-size: 1.8rem;
}

.basket__product-amount button {
  height: 20px;
  width: 20px;
  margin: 0 5px;
}

.basket__product__button-delete {
  margin: 15px 0;
  color: red;
  width: 80px;
}

.grand-total {
  border-top: 2px solid #55a602;
  text-align: right;
  font-size: 1.8rem;
  font-weight: 600;
  color: #55a602;
  ;
}
</style>
