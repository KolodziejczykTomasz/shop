<template>
    <Header />
    <section>
        <div id="product__edit">
            <div class="product__edit__wrapper">  
                <form @submit.prevent="hanldeEditProduct()">            
                    <input 
                        type="text" 
                        name="image" 
                        v-model="product.image"                               
                        placeholder="Adres url"
                    />   
                    <input 
                        type="text" 
                        name="title" 
                        v-model="product.title" 
                        placeholder="Nazwa"
                    />              
                   <input 
                        type="text" 
                        name="price" 
                        v-model="product.price" 
                        placeholder="Cena [zł]"
                    />               
                    <input 
                        type="text" 
                        name="availability" 
                        v-model="product.availability"  
                        placeholder="Dostępność [szt.]"
                     />
                    <textarea 
                        type="textarea"
                        name="description" 
                        v-model="product.description" 
                        placeholder="Opis">
                    </textarea>   
                    
                <div class="product__edit__details-edit">               
                    <NuxtLink to="/shop">    
                    <button class="product__edit__details-button">Anuluj</button>
                    </NuxtLink>
                    <NuxtLink to="">    
                    <button class="product__edit__details-button" :disabled="isSaving"> 
                        <span v-show="!isSaving">Zapisz</span>
                        <span v-show="isSaving">zapisywanie...</span></button>
                    </NuxtLink>            
                </div> 
            </form>         
            </div>
        </div>
    </section>   
    <Footer />
</template>
<script setup lang="ts">
    import Header from "../../../components/header.vue";
    import Footer from "../../../components/footer.vue";
    import { useCartStore } from "~~/stores/cartStore";
    
    const isSaving = ref(false)
    const cartStore = useCartStore()
    cartStore.getCart();

    const { id } = useRoute().params
    const uri = 'http://localhost:4000/products/' + id
    const { data: product } = await useFetch(uri, { key: "id" })

interface productToChange {
    image: string,
    title: string,
    price: string,
    availability: string,
    description: string
}
   const productToChange: productToChange = { image: "", title: "", price: "", availability: "", description: ""  };


const emit = defineEmits(['update:modelValue'])

    const hanldeEditProduct = async () => {
        isSaving.value = true
        console.log(productToChange)
        setTimeout(() => {
            isSaving.value = false
        }, 3000)
    }

useHead({
    title: 'Edycja produktu',
    meta: [{ name: 'description', content: 'Edycja produktu' }]
})

</script>

<style lang="scss" scoped>
#product__edit {
    margin: 50px 0 50px 0;   
    height: auto;
    width: 100%;
}

.product__edit__wrapper {
    display: flex;
    flex-direction: column;
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

.product__edit__details-edit {
    display: flex;    
    flex-direction: row;
}

.product__edit__wrapper form {
    @include flex-center;
    flex-direction: column;
    & input {
        display: flex;
        min-width: 300px;
        width: 60%;
        height: 40px;
        margin: 15px 0;
        border-radius: 20px;
        padding-left:20px;
        &:focus {
            border: 2px solid $primary-color-green !important;
        }
    }

    & textarea {
        display: flex;
        min-width: 300px;
        width: 60%;
        height: 120px;
        margin: 20px 0;
        border-radius: 20px;
        padding-left:20px;
        padding-top:10px;
        &:focus {
            border: 2px solid $primary-color-green !important;
        }
    }
}
</style>
