<script setup lang="ts">
    import { store } from '../../store.js';

    import RaDescription from './GodActions/RaDescription.vue';
</script>

<template>
    <div class="action-description action--god" id="ra"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Ra' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/ra.png" alt="">
                </div>
                <h2 class="action__headline">RA - GOD ACTION</h2>
            </div>


            <RaDescription />
        </div>
</template>