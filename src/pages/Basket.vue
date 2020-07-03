<template>
	<div class="container">
		<h1>Basket</h1>

		<div v-for="(item, index) in basket" :key="index">
			<div class="single-product">
				<span><b>Item</b>: {{ item.name }}</span>
				<span><b>Quantity</b>: 
					<button @click="reduceQuantity(index)" class="btn-plus">-</button>
						{{ item.quantity }}
					<button @click="addQuantity(index)" class="btn-plus">+</button>
				</span>
				<button @click="removeProduct(index)" class="btn-delete">Remove</button>
			</div>
		</div>

		<router-link :to="{name: 'info'}" class="btn-basket" >Passer commande</router-link>
	</div>
</template>

<script>
import store from '../store/index'
import Vuex from 'vuex'

export default {
	store,
	name: 'Basket',
	computed: {
		...Vuex.mapGetters(['basket']),
	},
	methods: {
		...Vuex.mapActions([
    'removeProduct'
	]),
	...Vuex.mapActions([
    'addQuantity'
	]),
	...Vuex.mapActions([
    'reduceQuantity'
	])
	},


}
</script>

<style scoped>
	.container{
		margin-top: 30vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.single-product {
		display: flex;
		flex-direction: column;
		padding: 20px;
		border: none;
		border-radius: 20px;
		width: 60vw;
		margin-bottom: 30px;
		box-shadow: 0px 0px 1px 1px #fed400;
		text-align: center;
	}

	.single-product span{
		margin-top: 10px;
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

	.btn-delete{
    background-color: red;
    color: #fff;
    font-size: 15px;
    font-weight: 900;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;
    width: 10%;
    align-self: center;
	margin-top: 20px;
	}

	.btn-delete:hover{
	box-shadow: 0px 0px 1px 1px red;
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