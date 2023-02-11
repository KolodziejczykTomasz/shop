<template>
    <Header />
    <section id="new-product">
        <p class="title">Dodawanie nowego produktu</p>
        <div class="new-product__form">
            <form autocomplete="off" @submit.prevent="addProduct()">
                <input type="id" name="id" v-model="newProduct.id" placeholder="Identyfikator" />
                <input type="test" name="title" v-model="newProduct.title" placeholder="Nazwa produktu" />
                <input type="text" name="price" v-model="newProduct.price" placeholder="Cena" />
                <input type="test" name="tags" v-model="newProduct.tag" placeholder="Tag" />
                <input type="text" name="image" v-model="newProduct.image" placeholder="URL" />
                <input type="test" name="quantity" v-model="newProduct.quantity" placeholder="Ilość" />
                <input type="text" name="availability" v-model="newProduct.availability" placeholder="Dostępność" />
                <input type="text" name="specials" v-model="newProduct.specials" placeholder="Objęty promocją?" />
                <input type="text" name="description" v-model="newProduct.description" placeholder="Opis" />
                <button type="submit">Dodaj</button>
            </form>
        </div>
        <NuxtLink to="/shop"> <span> Przejdź do sklepu</span></NuxtLink>
    </section>
    <Footer />
</template>
<script setup lang="ts">
    import Header from "../../components/header.vue";
    import Footer from "../../components/footer.vue";
    import { useCartStore } from "~~/stores/cartStore";

    const cartStore = useCartStore()
    cartStore.getCart();

    interface newProduct {
        id: string,
        title: string,
        price: string,
        tag: string,
        image: string,
        quantity: string,
        availability: string,
        specials: string,
        description: string
    }

    const newProduct: newProduct = { id: "", title: "", price: "", tag: "", image: "", quantity: "", availability: "",
        specials: "", description: ""};
        const addProduct = async () => {
            await cartStore.submitNewProductForm(newProduct)
            setTimeout(() => {
            alert("Dziekujemy, product został dodany!!!");
            }, 1000)
    }

</script>

<style lang="scss" scoped>
#new-product {
    margin: 70px 20px;

    & .title {
        font-size: $font-size-xl;
        font-weight: $bold;
        text-align: center;
        padding-bottom: 70px;
    }

    & span {
        font-size: $font-size-s;
        color: $gray;
        text-align: center;
        width: 100%;
        display: inline-block;

        &:hover {
            color: $primary-color-green;
        }
    }
}

.new-product__form form {
    @include flex-center;
    flex-direction: column;

    & input {
        display: flex;
        width: 500px;
        max-width: 80%;
        height: 40px;
        margin: 15px 0;
        border-radius: 20px;
        padding-left: 20px;

        &:focus {
            border: 2px solid $primary-color-green !important;
        }
    }

    & button {
        @include flex-center;
        border: 2px solid $yellow;
        border-radius: 30px;
        color: $yellow;
        display: flex;
        font-size: $font-size-s;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 200px;
        margin: 20px 0;
        background-color: $primary-color-green;
        transition: .2s;

        &:hover {
            color: $white;
        }
    }


}
</style>