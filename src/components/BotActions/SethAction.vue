<script setup lang="ts">
    import { store } from '../../store.js';

    import SethDescription from './GodActions/SethDescription.vue';
</script>

<template>
    <div class="action-description action--god" id="thoth"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Seth' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/seth.png" alt="">
                </div>
                <h2 class="action__headline">SETH - GOD ACTION</h2>
            </div>
            <SethDescription />
        </div>
</template>