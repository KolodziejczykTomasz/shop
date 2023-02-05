<template>
    <Header />
    <section>
        <div id="product">
            <div class="product__wrapper">
                <div class="product__photo">
                    <img src="" :alt="`${product.title}`" />
                </div>
                <div class="product__details">
                    <p class="product__details-name">{{ product.title }}</p>
                    <p class="product__details-price">{{ product.price }}zł</p>                  
                    <p class="product__details-availability">Dostępność: {{ product.availability }} sztuk</p>
                    <p class="product__details-add">
                      <NuxtLink to="/cart">    
                        <button class="product__details-button" :disabled="isPending" @click="addToBasket()" >                       
                            <span v-show="!isPending">Dodaj do koszyka</span>
                            <span v-show="isPending">dodawanie...</span>
                        </button>
                       </NuxtLink>
                    </p>
                </div>
            </div>
            <div class="product-description">
                {{ product.description }}
            </div>
        </div>
    </section>
    <section id="products__related">
        <div id="products__related-bar">
            <div>Podobne produkty</div>        
        </div>
        <div id="products__related-wrapper">    
        <Product :class="{ specials: isSpecials}" v-for="item in allProducts.filter(item => item.tags === product.tags && item.id !== product.id)" :product=product :key="index" />        
        </div>
    </section>
    <Footer />
</template>
<script setup >
    import Header from "../../components/header.vue";
    import Footer from "../../components/footer.vue";
    import { useCartStore } from "~~/stores/cartStore";
    import Product from "../../components/product.vue";
    const cartStore = useCartStore()
    cartStore.getCart();

    const { id } = useRoute().params
    const uri = 'http://localhost:4000/products/' + id
    const { data: product } = await useFetch(uri, { key: id })

    const isPending = ref(false)
const { data: allProducts } = await useFetch('http://localhost:4000/products');
    const addToBasket = async () => {
        isPending.value = true
        await cartStore.addToCart(product)
        setTimeout(() => {
            isPending.value = false
        }, 3000)
    }
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
    font-size: $font-size-s;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 150px;
    background-color: $primary-color-green;
    margin-left: -10px;
    margin-top: 40px;     
   color: $yellow;transition: .2s; 
        
       &:hover {
            color: $white;
        } 
}

#products__related-bar {
    @include flex-center;
    height: 70px;
    width: 100%;
    font-size: $font-size-l;
    color: $yellow;
    font-family: "BloggerSansBold";
    background-color: $primary-color-green;
    & p {
        display: block;
    }
}

#products__related {
    width: 100%;


    & #products__related-wrapper {
        display: grid;
        justify-content: left;
        align-items: center;
        row-gap: 20px;
        column-gap: 20px;
        height: auto;
        width: 100%;
        margin: 70px 0;
    }
}

@media only screen and (max-width: 550px) {
    #products__related-wrapper {
        justify-content: center;
        grid-template-columns: repeat(1, 1fr);
        padding: 0 40px;
    }
}

@media only screen and (min-width: 551px) {
    #products__related-wrapper {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 40px;
    }
}

@media only screen and (min-width: 990px) {
    #products__related-wrapper {
        grid-template-columns: repeat(3, 1fr);
        padding: 0 40px;
    }
}

@media only screen and (min-width: 1200px) {
    #products__related-wrapper {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
