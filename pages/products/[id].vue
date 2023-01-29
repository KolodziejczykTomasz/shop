<template>
    <Header />
    <section id="product">
        <div class="product__wrapper">
            <div class="product__photo">
                <img :src="`${product[id].imgUrl}`" :alt="`${product[id].title}`" />
            </div>
            <div class="product__details">
                <p class="product__details-name">{{ product[id].title}}</p>
                <p class="product__details-price">{{ product[id].price}}zł</p>
                <div class="product__details-amount">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <p class="product__details-availability">Dostępność: 15 sztuk</p>
                <p class="product__details-add">
                    <button class="product__details-button">
                        Dodaj do koszyka
                    </button>
                </p>
            </div>
        </div>
        <div class="product-description">
            {{ product[id].description}}
        </div>
    </section>
    <section id="products__related">
        <div id="products__related-bar">
            <p>Podobne produkty</p>
        </div>
        <div id="products__related-wrapper">
            <Product :product="product"/>
            <Product :product="product"/>
            <Product :product="product"/>
            <Product :product="product"/>
        </div>
    </section>
    <Footer />
</template>
<script setup>
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
import Product from "../../components/product.vue";
import { useRoute } from "vue-router";

const { product } = defineProps(['product'])
const route = useRoute();
route.params.product.id









</script>

<style lang="scss">
#product {
    margin: 30px 0;
    min-height: 500px;
    height: auto;
    width: 100%;
}

.product-description {
    min-height: 100px;
    height: auto;
    width: 100%;
    font-size: $font-size-m;
    line-height: 24px;
    margin-top: 20px;
    padding: 0 5px;
}

.product__wrapper {
    display: flex;
    flex-direction: column;

    & .product__photo {
        @include flex-center;
        width: 100%;
        border: 1px solid $primary-color-green;

        & img {
            @include flex-center;
            max-height: 320px;
            max-width: 320px;
            width: 100%;
            height: 100%;
            border: 1px solid red;
        }
    }

    & .product__details {
        display: flex;
        flex-direction: column;
        margin-left: 35px;
        width: 100%;
    }
}

@media only screen and (min-width: 768px) {
    .product__wrapper {
        flex-direction: row;
    }

    .product__photo {
        max-width: 500px;
        width: auto;
    }
}

.product__details-name {
    font-size: $font-size-xl;
    padding-top: 20px;
    margin-bottom: 20px;
    font-weight: $bold;
}

.product__details-price,
.product__details-amount,
.product__details {
    font-size: $font-size-m;
    margin-top: 15px;
    margin-bottom: 15px;
}

.product__details-amount {
    display: flex;
    justify-content: flex-start;
}

.product__details-availability {
    margin-top: 10px;
    margin-left: -5px;
}

.product__details-amount button {
    height: 20px;
    width: 20px;
    margin: 0 5px;
}

.product__details-amount button:first-child {
    margin-left: -5px;
}

.product__details-amount button p {
    padding: 10px;
}

.product__details-button {
    @include flex-center;
    border: 2px solid $yellow;
    border-radius: 30px;
    color: $yellow;
    font-size: $font-size-s;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 150px;
    background-color: $primary-color-green;
    margin-left: -10px;
    margin-top: 40px;
}

#products__related-bar {
    @include flex-center;
    height: 70px;
    width: 100%;
    font-size: $font-size-l;
    color: $yellow;
    font-family: "BloggerSansBold";
    background-color: $primary-color-green;
}

#products__related {
    margin-bottom: 70px;

    & #products__related-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: auto;
        width: 100%;
    }
}
</style>
