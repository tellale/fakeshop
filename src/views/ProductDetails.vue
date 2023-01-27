<template>
    <h1>Product Detail</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();
        const id = ref<string>(route.params.id as string);
        return { id }
        
    },
})
</script>
