<template>
<div class="product-item">
  <img v-bind:src="product.imageUrl"/>
<h3 clas="product-name">{{ product.name }}}</h3>   
<p class="product-price">${{ product.price }}}</p>
<router-link v-bind:to="'/products/'+product.id"> <!--router link je bolji od anchora jer nam ne refresha str.-->
<button>View details</button></router-link>
    </div>
</template>

<script>
export default{
    name: 'ProductsGridItem',
    props: ['product'], //roditelj dodjeljuje vrijednost za product 
}
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  .product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>