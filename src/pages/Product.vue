<template>
  <div class="container">
    <div class="card">
      <img v-bind:src="product.image">
      <span><b>Vendeur</b> : {{  product.seller.firstName }} {{  product.seller.lastName }}</span>
      <span><b>Prix</b> : {{  product.price }} €</span>
      <span><b>Titre</b> : {{ product.title }}</span>

      <div class="quantity">
        <button @click="remove" class="btn-plus">-</button>
        {{ quantity }}
        <button @click="add" class="btn-plus">+</button>
      </div>
      <button @click="addp" class="btn-basket">ADD TO BASKET</button>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
import Vuex from 'vuex'

export default {
  store,
  name: 'Product',
  data() {
    return {
      products: store.state.products,
      param: null,
      product: null,
      quantity: 0,
    }
  },
  created() {

  this.param = this.$route.params.id

  this.product = this.products.filter(obj => {
    return obj.id == this.param
  })[0]

},
methods: {
  add() {
    this.quantity++
  },
  remove() {
    if (this.quantity > 0) {
      this.quantity--
    }
  },
  ...Vuex.mapActions([
    'addProduct'
  ]),
  addp(){
    let obj = {name: this.product.title, quantity: this.quantity}
    if (this.quantity > 0) {
      this.addProduct(obj)
    }
    
  }
},
}
</script>

<style scoped>
  .container {
    margin-top: 20vh;
  }

  .card{
    display: flex;
    flex-direction: column;
    align-self: center;
  }

  .card img{
    width: 10%;
    align-self: center;
    margin-bottom: 100px;
  }

  .card span{
    margin-bottom: 20px;
  }

  .quantity {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .btn-plus{
    margin-left: 15px;
    margin-right: 15px;
    background-color: #fed400;
    color: #fff;
    font-size: 15px;
    font-weight: 900;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;
  }

  .btn-plus:hover{
    box-shadow: 0px 0px 1px 1px #fed400;
  }

  .btn-basket{
    background-color: #fed400;
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;
    width: 20%;
    align-self: center;
  }

  .btn-basket:hover{
    box-shadow: 0px 0px 1px 1px #fed400;
  }
</style>