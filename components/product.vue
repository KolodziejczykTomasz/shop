<template>
 <NuxtLink :to="`/products/${id}`"> <div class="product">
  
    <div class="product-photo" >
      <img :src="imageUrl" :alt="`${title}`"/>
    </div>
    <div class="product-name">{{ title }}</div>
    <div class="product-price">{{ price }} zł</div>
  </div></NuxtLink>
</template>
<script setup lang="ts">

const props = defineProps({
  id: String || Number,
  urlImg: String,
  title: String,
  price: String
})

const imageUrl = new URL(`../static/products/${props.urlImg}`, import.meta.url).href

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
