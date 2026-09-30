<script setup lang="ts">

import { store } from '../store.js';

const props = defineProps({
  row: { type: Number, required: true },
  column: { type: Number, required: true }
});

</script>

<template>
    <div class="action-tile"
        :class="{ 'active-tile': store.pyramid.getCurrentRow() === row && store.pyramid.getCurrentCol() === column }"
                
    >
        <img :src="store.pyramid.getPyramid()[row][column].image" 
            :title="store.pyramid.getPyramid()[row][column].title"
        />
    </div>
</template>