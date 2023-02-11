import { useStoreAuth } from "~~/stores/storeAuth";
const storeAuth = useStoreAuth();

export default defineNuxtRouteMiddleware((to, from) => {
  if (!storeAuth.user) {
    return navigateTo('/')
  }else {
    return navigateTo('/shop')
  }
})