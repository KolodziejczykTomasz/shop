import {defineStore} from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    newsletter: [],
    contact: [],
    users: [],
    isDiscount: false,
    newUser: [],
    products: [],
    updateProduct: []
  }),
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    cartTotalLength() {
      return this.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },

  },
  actions: {
    async getCart() {
      const data = await $fetch("http://localhost:4000/cart");
      this.cart = data;
    },

    async deleteFromCart(product) {
      this.cart = this.cart.filter((item) => {
        return item.id !== product.id;
      });
      await $fetch("http://localhost:4000/cart/" + product.id, {
        method: "delete",
      });
    },

  async incQuantity(product) {
      let updateProduct;

      this.cart = this.cart.map((item) => {
        if (item.id === product.id && item.quantity <= item.availability) {
          item.quantity++;
          item.availability--;
          updateProduct = item || (updateProduct = product._rawValue);
        }
        return item;
      });

      await $fetch("http://localhost:4000/cart/" + product.id, {
        method: "put",
        body: JSON.stringify(updateProduct),
      });
      await $fetch("http://localhost:4000/products/" + product.id, {
        method: "put",
        body: JSON.stringify(updateProduct),
      });
    },

    async decQuantity(product) {
      let updateProduct;

      this.cart = this.cart.map((item) => {
        if (item.id === product.id && item.quantity > 1) {
          item.quantity--;
          item.availability++;
          updateProduct = item;
        }
        return item;
      });
      await $fetch("http://localhost:4000/cart/" + product.id, {
        method: "put",
        body: JSON.stringify(updateProduct),
      });
      await $fetch("http://localhost:4000/products/" + product.id, {
        method: "put",
        body: JSON.stringify(updateProduct),
      });

    },
    
    async addToCart(product) {
      const exists = this.cart.find((item) => item.id === product._rawValue.id);
      if (exists) {
        this.incQuantity(product._rawValue);
      }

      if (!exists) {
        this.cart.push({ ...product._value, quantity: 1 });

        await $fetch("http://localhost:4000/cart", {
          method: "post",
          body: JSON.stringify({ ...product.value, quantity: 1 }),
        });
      }
    },

    async submitNewsletterForm(email) {
      this.newsletter.push({ email });

      await $fetch("http://localhost:4000/newsletter", {
        method: "post",
        body: JSON.stringify({ email }),
      });
    },

    async submitContactForm(contactMessage) {
      this.contact.push({ contactMessage });

      await $fetch("http://localhost:4000/contact", {
        method: "post",
        body: JSON.stringify({ ...contactMessage }),
      });
    },

    async submitLoginForm(loginUser) {
      this.users.push({ loginUser });

      await $fetch("http://localhost:4000/users", {
        method: "post",
        body: JSON.stringify({ ...loginUser }),
      });
    },

    async submitSingUpForm(addUser) {
      this.users.push({ addUser });

      await $fetch("http://localhost:4000/users", {
        method: "post",
        body: JSON.stringify({ ...addUser }),
      });
    },

   async submitNewProductForm(newProduct) {
      this.products.push({ newProduct });

      await $fetch("http://localhost:4000/products", {
        method: "post",
        body: JSON.stringify({ ...newProduct }),
      });
    },

    async submitUpdateProductForm(updateProduct) {
      this.updateProduct.push({ updateProduct });          
        
      await $fetch("http://localhost:4000/products/" + updateProduct.id, {
        method: "post",
        body: JSON.stringify(updateProduct),       
      });          
    },

  },
});