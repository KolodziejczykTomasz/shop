<template>
<div class="cart__product">
    <div class="cart__product-photo">
        <img :src="product.imgUrl" :alt="product.title">
    </div>
    <div class="cart__product-name">
        <p>{{product.title}}</p>
    </div>
    <div class="cart__product-quantity">
        <div class="cart__product-amount">
            <p>{{ product.price * product.quantity }}zł</p>
            <button>+</button>
            <p>{{ product.quantity }}</p>
            <button>-</button>
            <button class="cart__product__button-delete">x</button>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
const { product } = defineProps(['product'])
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
            border: 1px solid red;
        }
    }

}

.cart__product-name {
    @include flex-center;
    width: 60%;
    font-size: $font-size-m;
}

.cart__product-quantity {
    @include flex-center;
    flex-direction: column;
    width: 20%;


    & div:first-child {
        width: 100%;
        text-align: right;
        padding-right: 30px;
    }
}

.cart__product-amount {
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

    & button.cart__product__button-delete {
        color: red;
        width: 80px;
    }

}
</style>