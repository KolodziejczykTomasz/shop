<template>
    <Header />
    <section id="new-product">
        <p class="title">Dodawanie nowego produktu</p>
        <div class="new-product__form">
            <form autocomplete="off">
                <input type="id" name="id" v-model="id" placeholder="Identyfikator" />
                <input type="test" name="title" v-model="title" placeholder="Nazwa produktu" />
                <input type="text" name="price" v-model="price" placeholder="Cena" />
                <input type="test" name="tags" v-model="title" placeholder="Tag" />
                <input type="text" name="image" v-model="image" placeholder="URL" />
                <input type="test" name="quantity" v-model="quantity" placeholder="Ilość" />
                <input type="text" name="availability" v-model="price" placeholder="Dostępność" />
                <input type="text" name="specials" v-model="specials" placeholder="Objęty promocją?" />
                <input type="text" name="description" v-model="description" placeholder="Opis" />
                <button type="submit">Dodaj</button>
            </form>
        </div>
        <NuxtLink to="/shop"> <span> Przejdź do sklepu</span></NuxtLink>
    </section>
    <Footer />
</template>
<script setup >
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
</script>

<style lang="scss">
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