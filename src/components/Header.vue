<template>
  <header>
    <router-link :to="{name: 'homepage'}">
    <h3>Mon E-commerce</h3>
    </router-link>
    <nav>
        <router-link :to="{name: 'basket'}" class="basket">Basket <span v-show="items > 0">{{ items }}</span></router-link>
    </nav>
  </header>
</template>

<script>
import store from '../store/index'
import Vuex from 'vuex'

export default {
  store,
  name: 'Header',
  computed: {
		...Vuex.mapGetters(['items']),
  }
}
</script>

<style>
header {
  display: flex;
  background-color: #fff;
  width: 100%;
  justify-content: center;
  position: fixed;
  top: 0px;
  padding: 2vh 0;
  box-shadow: 0px 5px 5px 1px rgba(235,235,235,1);
}

h3,a {
  font-size: 30px;
  text-decoration: none;
  color: #111;
}

nav{
  display: flex;
  margin-left: 50vw;
}

a.basket{
  float: right;
  font-size: 20px;
  font-weight: bold;
  margin-top: 50%;
}

a.basket:hover {
  color: red;
}

a.basket span{
  background-color: red;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  padding: 1px 7px;
  border-radius: 50%;
}
</style>