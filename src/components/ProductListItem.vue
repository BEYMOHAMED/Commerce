<template>
  <div class="card">
      <img v-bind:src="image" /><br>
      <span>Vendeur : {{  fullName }}</span><br>
      <span>Prix : {{  price }} €</span><br>
      <span>Titre : {{ title }}</span><br>
    </div>
</template>

<script>


export default {
  name: 'ProductListItem',
  props: {
    fullName: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
  },
}
//Créez un component nommé « ProductListItem.vue » qui permettra d’afficher la photo, le titre, le vendeur et le prix d’un article
</script>

<style scoped>
.card{
  border: none;
  border-radius: 10px;
  width: 30vw;
  padding: 40px 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 17px 14px rgba(235,235,235,1);
}
</style>