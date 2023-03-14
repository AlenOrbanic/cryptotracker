<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl"/>
    </div>
    <div id="product-details">
      <h1>{{ product.name }}}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average raiting: {{ product.averageRating }}}</p>
      <button id="add-to-cart">Add to cart </button>
      <h4>Description</h4>
      <p>{{ product.description }}}</p>
    </div>
  </div>
  <NotFoundPage v-else/>
    </template>
    
    <style scoped>
    #page-wrap {
      margin-top: 16px;
      padding: 16px;
      max-width: 600px;
    }
  
    #img-wrap {
      text-align: center;
    }
  
    img {
      width: 400px;
    }
  
    #product-details {
      padding: 16px;
      position: relative;
    }
  
    #add-to-cart {
      width: 100%;
    }
  
    #price {
      position: absolute;
      top: 24px;
      right: 16px;
    }
  
    .green-button {
      background-color: green;
    }
  
    .grey-button {
      background-color: #888;
    }
  </style>
  
    
    <script>
    import {products} from '../fake-data';
    import NotFoundPage from './NotFoundPage.vue';

    export default{
        name: 'ProductDetailPage',
        components: {
          NotFoundPage
        },
        data(){
          return{
            product: products.find((p) => p.id === this.$route.params.id), // Ciji su parametri upisani u ruti oni se displayaju matching sa parametrima iz fake-date
          };
        }
    };
    </script>