<template>
    <Header />
    <section id="user__single">
        <div>
           <p> Moje dane:</p>
            <ul>
                <li>Imię: {{ user.name }}</li>   
                <li>Nazwisko: {{ user.lastName }}</li> 
                <li>Email: {{ user.email }}</li>                    
            </ul>
            <div v-show="user.street">
            <p>Dane do wysyłki </p>
                <ul>
                    <li>Ulica: {{ user.street }}</li>   
                    <li>Nr mieszkania/bloku: {{ user.address }}</li> 
                    <li>Miejscowośći: {{ user.city }}</li> 
                    <li>Kod pocztowy: {{ user.postcode }}</li> 
                    <li>Poczta: {{ user.post }}</li> 
                </ul>
            </div>
        </div>
        <div class="user__single-button-wrapper" v-show="!user.street">
            <button class="user__detailsAdd-button" @click="isHidden = !isHidden" >Uzupełnij swoje dane</button>
        </div> 
        <div class="addUserData__form" v-if="!isHidden">
            <form autocomplete="off" @submit.prevent="onSubmit">
                <input type="text" name="name" v-model="userRefil.name" placeholder="Imię" />
                <input type="text" name="lastName" v-model="userRefil.lastName" placeholder="Nazwisko" />
                <p>Adres do wysyłki</p>
                <input type="text" name="city" v-model="userRefil.city" placeholder="Miejscowość" />
                <input type="text" name="address" v-model="userRefil.address" placeholder="Nr domu/mieszkania" />
                <input type="text" name="street" v-model="userRefil.street" placeholder="Ulica" />
                <input type="text" name="postcode" v-model="userRefil.postcode" placeholder="Kod pocztowy" />
                <input type="text" name="post" v-model="userRefil.post" placeholder="Poczta" />
                <button type="submit">Zapisz</button>
            </form>
        </div>
    </section>
    <Footer />
</template>
<script setup lang="ts">
    import Header from "../../components/header.vue";
    import Footer from "../../components/footer.vue";
    import { useStoreAuth } from "~~/stores/storeAuth";
    import { useCartStore } from "~~/stores/cartStore";

    const storeAuth = useStoreAuth();
    const cartStore = useCartStore();
    cartStore.getCart();

        const { id } = useRoute().params
        const uri = 'http://localhost:4000/users/' + id
        const { data: user } = await useFetch(uri, { key: id })
        const userId = id;
            interface userRefil {
                    name: string,
                    lastName: string,
                    city: string,
                    address: string,
                    street: string,
                    postcode: string,
                    post: string,
                    
                    }
   
    const userRefil: userRefil = { name: "", lastName: "", city: "", address: "", street: "", postcode: "", post: "" };
    const onSubmit = ()=>{
        if(!userRefil.name || !userRefil.lastName || !userRefil.city || !userRefil.address || !userRefil.street || !userRefil.postcode || !userRefil.post){
            alert("Uzupełnij wymagane pola")
        }else{
            safeRefilData();
        }        
    }
    const isHidden = ref(true);   
    const isExisting = storeAuth.user.lastname;

    const refilUser: refilUser = { userRefil};
    const safeRefilData = async () => {
        await storeAuth.submitRefilForm(userRefil, id).
        setTimeout(() => {
            alert("Dane zostały zapisane");          
        }, 1000)
    }

useHead({
    title: 'Dane użytkownika',
    meta: [{ name: 'description', content: 'Dane użytkownika' }]
})
</script>

<style lang="scss" scoped>
#user__single {
    margin: 50px 0 50px 0;
    min-height: 300px;   
    height: auto;
    width: 100%;
    & p {
        display: block;
        padding: 30px;
        text-align: left;
        font-size:  $font-size-xl;
    }
    & ul {
        margin-left: 40px;
        font-size:  19px;
        list-style: none;
        & li {
            padding: 3px 0;
        }
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

.addUserData__form form {
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
