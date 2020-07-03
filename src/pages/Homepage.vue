<template>
  <div>
    <div v-for="product in products" :key="product.id" class="container">
      <router-link :to="{name: 'product', params: {id: product.id}}">
        <ProductListItem :fullName="product.seller.firstName + ' ' + product.seller.lastName" :price="product.price" :title="product.title" :image="product.image"  />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductListItem from '../components/ProductListItem.vue'
import store from '../store/index'
import Vuex from 'vuex'

export default {
store,
name: 'Homepage',
components: {
  ProductListItem
},
  computed: {
    ...Vuex.mapGetters(['products']),
  },
created () {
},
}
</script>

<style scoped>
.container{
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
}
</style>