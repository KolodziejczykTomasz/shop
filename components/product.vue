<template>
 <NuxtLink :to="`/products/${product.id}`" :product="product">  
    <div class="product"> 
    <div class="non-specials" :class="{ specials: isSpecials }" >Promocja</div> 
        <div class="product-photo" >
          <img :src="`${imageUrl}`" :alt="`${product.title}`"/>
        </div>
        <div class="product-name">{{ product.title }}</div>
        <div class="product-price">{{ product.price }} zł</div>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup >


const {product} = defineProps(['product']);
const isSpecials = product.specials === true;
const imageUrl = new URL(`../src${product.image}`, import.meta.url).href

</script>
<style lang="scss">
.product {
  @include flex-center;
  @include box-shadow-card;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: 281px;
  max-height: 400px; 
  cursor: pointer;
    &:hover {
      @include box-shadow-card-hover;
    } & .non-specials {
        visibility: hidden;
      }
      & .specials {
        @include flex-center;
        @include background-gradient;
        position: absolute;
        color: $yellow;
        width: 100%;
        height: 50px;
        font-size: $font-size-xl;
        text-transform: uppercase;
        visibility: visible;
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

.product-name, .product-price {
  @include flex-center;
  font-size: $font-size-m;
  height: 70px;
  width: 100%;
}

.product-price { 
  height: 50px;  
}

@media only screen and (min-width: 768px) {
  .product {
    width: 30%;
  }
}
</style>
