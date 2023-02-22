<template>
    <Header />
    <section>
        <div id="product__edit">
            <div class="product__edit__wrapper">
                <div class="product__edit__details-photo">
                    <img :src="`${product.image}`" :alt="`${product.title}`" />
                </div>
                <div class="product__edit__details">
                    <p class="product__edit__details-name">{{ product.title }}</p>
                    <p class="product__edit__details-price">{{ product.price }}zł</p>                  
                    <p class="product__edit__details-availability">Dostępność: {{ product.availability }} sztuk</p>
                    
                </div>
            </div>
            <div class="product__edit__details-description">
                {{ product.description }}
            </div>
            <div class="product__edit__details-edit">               
                <NuxtLink to="/shop">    
                <button class="product__edit__details-button">Anuluj</button>
                </NuxtLink>
                <NuxtLink to="">    
                <button class="product__edit__details-button" :disabled="isPending"> 
                    <span v-show="!isPending">Zapisz</span>
                    <span v-show="isPending">zapisywanie...</span></button>
                </NuxtLink>
            
            </div>          
        </div>
    </section>   
    <Footer />
</template>
<script setup >
    import Header from "../../../components/header.vue";
    import Footer from "../../../components/footer.vue";
    import { useCartStore } from "~~/stores/cartStore";

    const cartStore = useCartStore()
    cartStore.getCart();

    const { id } = useRoute().params
    const uri = 'http://localhost:4000/products/' + id
    const { data: product } = await useFetch(uri, { key: id })

    
    const addToBasket = async () => {
        isPending.value = true
        await cartStore.addToCart(product)
        setTimeout(() => {
            isPending.value = false
        }, 3000)
    }

useHead({
    title: 'Edycja produktu',
    meta: [{ name: 'description', content: 'Edycja produktu' }]
})

</script>

<style lang="scss" scoped>
#product__edit {
    margin: 50px 0 10px 0;   
    height: auto;
    width: 100%;
}

.product__edit__details-description {
    min-height: 100px;
    height: auto;
    width: 100%;
    font-size: $font-size-m;
    line-height: 24px;
    margin-top: 40px;
    padding: 0 5px;
}

.product__edit__wrapper {
    display: flex;
    flex-direction: row;

    & .product__edit__details-photo {
        @include flex-center;
        width: 100%;
        border: 1px solid $primary-color-green;

        & img {
            @include flex-center;
            max-height: 320px;
            max-width: 320px;
            width: 100%;
            height: 100%;           
        }
    }

    & .product__edit__details {
        display: flex;
        flex-direction: column;
        margin-left: 35px;
        width: 100%;
        
    }
}

@media only screen and (min-width: 768px) {
    .product__edit__wrapper {
        flex-direction: row;
    }

    .product__edit__details-photo {
        max-width: 500px;
        width: auto;
    }
}

.product__edit__details-name {
    font-size: $font-size-xl;
    padding-top: 20px;
    margin-bottom: 20px;
    font-weight: $bold;
}

.product__edit__details-price,
.product__edit__details-amount,
.product__edit__details {
    font-size: $font-size-m;
    font-weight: normal;
    margin-top: 15px;
    margin-bottom: 15px;
}

.product__edit__details-amount {
    display: flex;
    justify-content: flex-start;
}

.product__edit__details-availability {
    margin-top: 10px;
    margin-left: -5px;
}

.product__edit__details-edit {
    display: flex;
    justify-content: flex-end;
    margin: 0 20px 70px 0;
}

.product__edit__details-button {
    @include flex-center;
    border: 2px solid $yellow;
    border-radius: 30px;    
    font-size: $font-size-s;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 150px;
    background-color: $primary-color-green;   
    margin-top: 40px; 
    margin-right: 20px;    
    color: $yellow;
    transition: .2s; 
        
       &:hover {
            color: $white;
        } 
}


</style>
