import {defineStore} from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart:[]
    }),
    getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
  
    cartTotalLength() {
      return this.cart.reduce((total, item) => {
        return total + (item.quantity)
      }, 0)
    },
  },
    actions:{
        async getCart(){
            const data = await $fetch('http://localhost:4000/cart')
            this.cart = data            
        },
         async deleteFromCart(product){
        this.cart = this.cart.filter(item =>{
        return item.id !== product.id
        })
          await $fetch('http://localhost:4000/cart/' + product.id, {
            method: 'delete'
          })
        },
        async incQuantity(product) {
          let updateProduct

          this.cart = this.cart.map(item => {
            if(item.id === product.id && item.quantity <= item.availability) {
              item.quantity++
              updateProduct = item
            }
            return item
          })
            await $fetch('http://localhost:4000/cart/' + product.id, {
            method: 'put',
            body: JSON.stringify(updateProduct)
          })
        },
        async decQuantity(product) {
          let updateProduct

          this.cart = this.cart.map(item => {
            if(item.id === product.id &&  item.quantity > 1 ) {
              item.quantity--
              updateProduct = item
            }
            return item
          })
            await $fetch('http://localhost:4000/cart/' + product.id, {
            method: 'put',
            body: JSON.stringify(updateProduct)
          })
        },
        async addToCart(product) {
          const exists = this.cart.find(item => item.id === product.id)
          if(exists) {
            this.incQuantity(product)
          }
          if(!exists) {
            this.cart.push({...product, quantity: 1})

            await $fetch('http://localhost:4000/cart', {
            method: 'post',
            body: JSON.stringify({...product, quantity: 1})
          })
          }
        }
      }
    })