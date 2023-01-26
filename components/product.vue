<template>
  <div class="product__item">
    <div class="product__item-photo" >
      <img :src="`static/products/${urlImg}`" :alt="`${title}`">
    </div>
    <div class="product__item-name">{{ title }}</div>
    <div class="product__item-price">{{ price }} zł</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  urlImg: String,
  title: String,
  price: String
})

</script>
<style lang="scss">
.product__item {
  @include flex-center;
  @include box-shadow-card;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  max-height: 400px;
  margin: 15px 5px;
  cursor: pointer;
  &:hover {
    @include box-shadow-card-hover;
  }
}

.product__item-photo {
  @include flex-center;
  width: 90%;
  height: 280px;
  margin: 0 auto;
}

.product__item-name {
  @include flex-center;
  font-size: $font-size-m;
  height: 70px;
  width: 100%;
  font-weight: $bold;
}

.product__item-price {
  @include flex-center;
  font-size: $font-size-m;
  font-weight: $bold;
  height: 50px;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .product__item {
    width: 24%;
  }
}
</style>
