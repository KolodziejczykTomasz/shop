<template>
  <Header />
  <section id="error">
    <div> 
      <p>Strona o podanym adresie nie istnieje :(</p>
      <p>Spróbuj ponownie</p>

    </div>
  </section>
  <Footer />
</template>
<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>

<style lang="scss" scoped>
#error div {
  min-height: 400px;
  @include flex-center;
  flex-direction: column;
  font-size: $font-size-xxl;
   & p {margin: 10px auto;}
}
</style>
