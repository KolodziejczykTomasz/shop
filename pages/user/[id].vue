<template>
    <Header />
    <section id="user__single">
        <div >
           <p> Adres email: {{ user.email }}</p>
        </div >
        <div class="user__single-button-wrapper">
            <button class="user__detailsAdd-button">Uzupełnij swoje dane</button>
        </div> 
    </section>
    <Footer />
</template>
<script setup >
    import Header from "../../components/header.vue";
    import Footer from "../../components/footer.vue";
    import { useCartStore } from "~~/stores/cartStore";
    const cartStore = useCartStore()
    cartStore.getCart();

    const { id } = useRoute().params
    const uri = 'http://localhost:4000/users/' + id
    const { data: user } = await useFetch(uri, { key: id })

  
useHead({
    title: 'Dane użytkownika',
    meta: [{ name: 'description', content: 'Dane użytkownika' }]
})

</script>

<style lang="scss" scoped>
#user__single {
    margin: 50px 0 10px 0;
    min-height: 300px;   
    height: auto;
    width: 100%;
    & p {
        display: block;
        padding: 30px;
        text-align: left;
        font-size:  $font-size-xl;
    }
    & .user__single-button-wrapper {
        display: flex;
        justify-content: flex-end;
        padding-right: 70px;
        & .user__detailsAdd-button {
                @include flex-center;
                border: 2px solid $yellow;
                border-radius: 30px;
                font-size: $font-size-s;
                height: 40px;
                line-height: 40px;
                text-align: center;
                width: auto;
                background-color: $primary-color-green;
                margin-left: -10px;
                margin-top: 40px;
                color: $yellow;
                transition: .2s;
                padding: 0 20px;

                &:hover {
                    color: $white;
                }
            }
        }
    
}
</style>
