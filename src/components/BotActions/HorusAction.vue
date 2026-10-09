<script setup lang="ts">
    import { store } from '../../store.js';

    import HorusDescription from './GodActions/HorusDescription.vue';
</script>

<template>
    <div class="action-description action--god" id="horus"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Horus' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/horus.png" alt="">
                </div>
                <h2 class="action__headline">HORUS - GOD ACTION</h2>
            </div>

            <HorusDescription />
        </div>
</template>