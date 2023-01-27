<template>
  <h1>Products</h1>
    <div class="product-card" v-for="product in products" :key="product.id">
      <div>
        <img v-if="product.images[0]" :src="product.images[0]" alt="">
      </div>
      <div class="card-title">
        <h2>{{ product.title }}</h2>
      </div>
      <div class="card-body">
        <p>${{ product.price }}</p>
        <button @click="viewDetails(product.id)">View Details</button>
      </div>


    </div>
</template>

<script lang="ts">
import fakeShopApi from "@/api/fakeShopAPI";
import { defineComponent } from "@vue/runtime-core";
import { Product } from "@/models/products";

export default defineComponent({
  data() {
    return {
      products: [] as Product[],
    }
  },
  methods: {
    async getData() {
      try{
        const response = await fakeShopApi.get<Product[]>('/products');
        this.products = response.data;
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
    viewDetails(id: number) {
      this.$router.push({
        name: 'details',
        params: {
          id
        }
      })
    }
  },
  created() {
        this.getData();
  }
})

</script>

<style scoped>
.product-card {
  display: inline-block;
  width: 300px;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
}

.product-card img {
  width: 15em;
}

</style>