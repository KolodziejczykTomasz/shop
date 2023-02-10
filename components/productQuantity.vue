<template>
<div class="cart__quantity">
    <div class="cart__quantity-amount">
        <p>{{ product.price * product.quantity }}zł</p>
       <button @click="cartStore.decQuantity(product)">-</button>
        <p>{{ product.quantity }}</p>
         <button @click="cartStore.incQuantity(product)">+</button>
        <button class="cart__quantity__button-delete" @click="cartStore.deleteFromCart(product)">x</button>
    </div>
</div>
</template>
<script setup lang="ts" >
    import { useCartStore } from "~~/stores/cartStore";
    const cartStore = useCartStore()
    cartStore.getCart();
    const { product } = defineProps(['product']);
</script>
<style lang="scss" scoped>
.cart__quantity {
    @include flex-center;
    flex-direction: column;
    width: 20%;


    & div:first-child {
        width: 100%;
        text-align: right;
        padding-right: 30px;
    }
}

.cart__quantity-amount {
    display: flex;
    font-size: $font-size-m;
    justify-content: flex-end;

    & p:first-child {
        margin-right: 30px;
        font-size: $font-size-m;
    }

    & button {
        height: 20px;
        width: 20px;
        margin: 0 5px;
    }

    & button.cart__quantity__button-delete {
        color: red;
        width: 80px;
    }
}
</style>