 <template > 
 <div class="product" v-show="storeAuth.auth === false" > 
  <NuxtLink :to="`/products/${product.id}`"  >  
           
      <div class="non-specials" :class="{ specials: isSpecials }" >Promocja</div>      
          <div class="product-photo" >
            <img :src="`${product.image}`" :alt="`${product.title}`"/>
          </div>
          <div class="product-name">{{ product.title }}</div>
          <div class="product-price">{{ product.price }} zł</div>
    </NuxtLink>  
  </div>

 <div class="product" v-show="storeAuth.auth === true"> 
    <NuxtLink :to="`/products/edit/${product.id}`" >
           
      <div class="non-specials" :class="{ specials: isSpecials }" >Promocja</div> 
      <div class="icon-edit"> 
            <img src="../assets/icons/edit.png" alt="Ikonka trybu edycji"  />         
      </div>
          <div class="product-photo" >
            <img :src="`${product.image}`" :alt="`${product.title}`"/>
          </div>
          <div class="product-name">{{ product.title }}</div>
          <div class="product-price">{{ product.price }} zł</div>
    </NuxtLink>  
  </div>   
</template>

<script lang="ts" setup >
  import { useStoreAuth } from "~~/stores/storeAuth";

  const storeAuth = useStoreAuth();
  const {product} = defineProps(['product']);

  const isAuth = storeAuth.auth === true;
  const isSpecials = product.specials === true;

</script>

<style lang="scss" scoped>
.product {
  @include flex-center;
  @include box-shadow-card;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: 281px;
  max-height: 400px; 
  cursor: pointer;
    &:hover {
      @include box-shadow-card-hover;
    } 
  & .non-specials {
    visibility: hidden;
  }

  & .specials {
    @include flex-center;
    @include background-gradient;       
    margin-left: -25px;
    margin-top: 50%;
    position: absolute;
    color: $yellow;
    width: 100%;
    height: 50px;
    font-size: $font-size-xl;
    text-transform: uppercase;
    visibility: visible;
  }  

  & .icon-edit {
  display: block;
  position: absolute;     
  top: 5px;
  right: 5px;
  color: $gray;
    & img {
      height: 20px;
      width: 20px;
  }
} 
}


.product-photo {
  @include flex-center;
  width: 90%;
  height: 280px;
  margin: 0 auto;
    & img {
        display: block;
        width: 230px;
        height: 230px;       
      }
}

.product-name, .product-price {
  @include flex-center;
  font-size: $font-size-m;
  height: 70px;
  width: 100%;
}

.product-price { 
  height: 50px;  
}

@media only screen and (min-width: 768px) {
  .product {
    width: 30%;
  }
}
</style>
