<template>
  <div class="container">
    <h1>Please enter your informations</h1>
      <form
        id="app"
        @submit="checkForm"
        action="/validated"
        novalidate="true"
      >

        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
          </ul>
        </p>

        <div class="field">
          <label for="name">Nom</label>
          <input
            id="name"
            v-model="nom"
            type="text"
            name="name"
          >
        </div>

        <div class="field">
          <label for="name">Prenom</label>
          <input
            id="prenom"
            v-model="prenom"
            type="text"
            name="prenom"
          >
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
          >
        </div>

        <div class="field">
          <label for="phone">Phone</label>
          <input
            id="phone"
            v-model.number="phone"
            type="number"
            name="phone"
          >
        </div>

        <div class="field">
          <label for="address">address</label>
          <input
            id="address"
            v-model="address"
            type="text"
            name="address"
          >
        </div>

        <div class="field">
          <label for="zipcode">Zipcode</label>
          <input
            id="zipcode"
            v-model.number="zipcode"
            type="number"
            name="zipcode"
          >
        </div>

        <div class="field">
          <label for="country">Country</label>
          <input
            id="country"
            v-model="country"
            type="text"
            name="country"
          >
        </div>

        <div class="field">
          <label for="city">city</label>
          <input
            id="city"
            v-model="city"
            type="text"
            name="city"
          >
        </div>

        <p>
          <input
            type="submit"
            value="Submit"
          >
        </p>

      </form>
  </div>
</template>

<script>
export default {
  name: "ClientInfo",
  data() {
    return {
      errors: [],
      nom: null,
      prenom: null,
      phone: null,
      email: null,
      address: null,
      zipcode: null,
      city: null,
      country: null,
    }
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.nom) {
        this.errors.push('nom required.');
      }else if(this.validString(this.nom))
      {
        this.errors.push('Valid nom required.');
      }

      if (!this.prenom) {
        this.errors.push('prenom required.');
      }else if(this.validString(this.prenom))
      {
        this.errors.push('Valid prenom required.');
      }

      if (!this.phone) {
        this.errors.push('phone required.');
      }else if(!this.validNumber(this.phone))
      {
        this.errors.push('Valid phone number required.');
      }

      if (!this.zipcode) {
        this.errors.push('zipcode required.');
      }else if(!this.validNumber(this.zipcode))
      {
        this.errors.push('Valid zipcode required.');
      }

      if (!this.address) {
        this.errors.push('address required.');
      }

      if (!this.city) {
        this.errors.push('city required.');
      }else if(this.validString(this.city))
      {
        this.errors.push('Valid city required.');
      }

      if (!this.country) {
        this.errors.push('country required.');
      }else if(this.validString(this.country))
      {
        this.errors.push('Valid country required.');
      }

      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validNumber: function (number) {
      var re = /^\d+$/
      return re.test(number);
    },
    validString: function (string) {
      var re = /[^a-zA-Z]+/g
      return re.test(string);
    }
  }
}
</script>

<style scoped>
  input{
    width: 20vw;
    height: 3vh;
  }

  label{
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .field{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  li{
    color: red;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>