<template>
<div class="cart__product">
    <div class="cart__product-photo">
        <img :src="`${product.image}`" :alt="`${product.title}`" />
    </div>
    <div class="cart__product-name">
        <p>{{product.title}}</p>
    </div>
    <ProductQuantity :product = product />
</div>
</template>
<script setup lang="ts">
    import ProductQuantity from "@/components/productQuantity.vue"
    import { useCartStore } from "~~/stores/cartStore";

    const cartStore = useCartStore()
    cartStore.getCart();
    const { product } = defineProps(['product']);

</script>
<style lang="scss">
.cart__product {
    display: flex;
    height: 82px;
    margin: 10px 0;

    & .cart__product-photo {
        @include flex-center;
        width: 20%;
        border: 1px solid $primary-color-green;

        & img {
            width: 70px;
            height: 70px;
            object-fit: contain;       
        }
    }

}

.cart__product-name {
    @include flex-center;
    width: 60%;
    font-size: $font-size-m;
}


</style>