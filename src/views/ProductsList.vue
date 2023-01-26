<template>
  <div class="products-list">
    <h1>This is a product list page</h1>
  </div>
</template>

<script lang="ts">
import fakeShopApi from "@/api/fakeShopAPI";
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  setup() {
    fakeShopApi.get('/products').then()
  }
})

</script>
