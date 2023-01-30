<template>
 <NuxtLink :to="`/products/${product.id}`" :product="product">  
    <div class="product">  
        <div class="product-photo" >
          <img src="../src/img/product_1" :alt="`${product.title}`"/>
        </div>
        <div class="product-name">{{ product.title }}</div>
        <div class="product-price">{{ product.price }} zł</div>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup >


const {product} = defineProps(['product'])
const imageUrl = new URL(`../src${product.image}`, import.meta.url).href

</script>
<style lang="scss">
.product {
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

.product-photo {
  @include flex-center;
  width: 90%;
  height: 280px;
  margin: 0 auto;
    & img {
        display: block;
        width: 230px;
        height: 230px;       
      }
}

.product-name {
  @include flex-center;
  font-size: $font-size-m;
  height: 70px;
  width: 100%;
  font-weight: $bold;
}

.product-price {
  @include flex-center;
  font-size: $font-size-m;
  font-weight: $bold;
  height: 50px;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .product {
    width: 24%;
  }
}

</style>
