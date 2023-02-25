<template>
    <Header />
    <section>
        <div id="product__edit">
            <div class="product__edit__wrapper">  
                <form @submit.prevent="hanldeEditProduct()">            
                    <input 
                        type="text" 
                        name="image" 
                        :value="product.image" 
                        @input="(e) => $emit('update:product.image', e.target.value)"                                                    
                        placeholder="Adres url"
                        ref="imageRef"
                    />   
                    <input 
                        type="text" 
                        name="title" 
                        :value="product.title" 
                        @input="(e) => $emit('update:product.image', e.target.value)"  
                        placeholder="Nazwa"
                        ref="titleRef"
                    />              
                   <input 
                        type="text" 
                        name="price" 
                        :value="product.price" 
                        @input="(e) => $emit('update:product.price', e.target.value)"  
                        placeholder="Cena [zł]"
                        ref="priceRef"
                    />               
                    <input 
                        type="text" 
                        name="availability" 
                        :value="product.availability" 
                        @input="(e) => $emit('update:product.availability', e.target.value)"   
                        placeholder="Dostępność [szt.]"
                        ref="availabilityRef"
                     />
                     <input 
                        type="text" 
                        name="quantity" 
                        :value="product.quantity" 
                        @input="(e) => $emit('update:product.quantity', e.target.value)"   
                        placeholder="Ilość [szt.]"
                        ref="quantityRef"
                     />
                      <input 
                        type="text" 
                        name="tags" 
                        :value="product.tags" 
                        @input="(e) => $emit('update:product.tags', e.target.value)"   
                        placeholder="tag"
                        ref="tagRef"
                     />
                     <input 
                        type="text" 
                        name="specials" 
                        :value="product.specials" 
                        @input="(e) => $emit('update:product.specials', e.target.value)"   
                        placeholder="Oferta specjalna"
                        ref="specialsRef"
                     />
                    <textarea 
                        type="textarea"
                        name="description" 
                        :value="product.description"
                        @input="(e) => $emit('update:product.description', e.target.value)"  
                        placeholder="Opis"
                        ref="descriptionRef"
                    >                       
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
    const { data: product } = await useFetch(uri, { key: id })


    const imageRef = ref();
    const priceRef = ref();
    const availabilityRef = ref();
    const descriptionRef = ref();
    const tagRef = ref();
    const specialsRef = ref();
    const quantityRef = ref();




    const emit = defineEmits(['update:product.description']);

    const props = defineProps({image: { type: String }});
    

    const hanldeEditProduct = async () => {
        isSaving.value = true

        const updateProduct = {
            id: id,
            image: imageRef._rawValue.value,
            price: priceRef._rawValue.value, 
            availability: availabilityRef._rawValue.value, 
            description: descriptionRef._rawValue.value,
            tags: tagRef._rawValue.value,
            specials: specialsRef._rawValue.value,
            quantity: quantityRef._rawValue.value
        }
        await cartStore.submitUpdateProductForm(updateProduct)        
        setTimeout(() => {
            isSaving.value = false,
            alert("Zmiany zostały zapisane")
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
        min-height: 120px;
        height: auto;
        margin: 20px 0;
        border-radius: 20px;
        padding-left:20px;
        padding-top:10px;
        font-family: "BloggerSans";
        font-weight:400;        
        &:focus {
            border: 2px solid $primary-color-green !important;
        }
    }
}
</style>
