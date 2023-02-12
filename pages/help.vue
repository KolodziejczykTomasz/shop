<template>
    <Header />
    <section id="help">
       <p class="title">Potrzebujesz pomocy, napisz do nas ?</p>
    <div class="help__form">
        <form autocomplete="off">
            <input type="text" name="name" v-model="name" placeholder="Wpisz swoje imię" required />
            <input type="mail" name="email" v-model="email" placeholder="Wpisz swój adres email" required />
            <input type="text" name="subject" v-model="subject" placeholder="Temat" required />
            <textarea placeholder="Wiadomość" v-model="message" name="message" required></textarea>
            <button type="submit">Wyślij</button>
        </form>
    </div>
    </section>
    <Footer />
</template>
<script setup >
    import Header from "../components/header.vue";
    import Footer from "../components/footer.vue";
useHead({
    title: 'Pomoc',
    meta: [{ name: 'description', content: 'Potrzebujesz pomocy' }]
})
</script>

<style lang="scss" scoped>
#help {
    @include flex-center;
    flex-direction: column;
    font-size: $font-size-m;
    margin: 20px 20px;
    min-height: 700px;
    height: auto;
    padding: 0;
    & div {
        height: 100%;
    }

    & .title {
        font-size: $font-size-xl;
        font-weight: $bold;
        padding-bottom: 50px;
    }
  
}
.help__form form {
    @include flex-center;
    flex-direction: column;
    height: 100%;

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

    & textarea {
        display: flex;
        width: 500px;
        max-width: 80%;
        height: 120px;
        margin: 20px 0;
        border-radius: 20px;
        padding-left: 20px;
        padding-top: 10px;

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