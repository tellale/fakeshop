<template>
    <h1>Product Detail {{ id }}</h1>
    <ProductDetail/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router';
import ProductDetail from '@/components/ProductDetail.vue'

export default defineComponent({
    components: {
        ProductDetail
    },
    setup() {
        const route = useRoute();
        const id = ref<string>(route.params.id as string);
        return { id }
        
    },
})
</script>
