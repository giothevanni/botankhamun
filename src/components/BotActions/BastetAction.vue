<script setup lang="ts">
    import { store } from '../../store.js';
    import BastetDescription from './GodActions/BastetDescription.vue';
</script>

<template>
    <div class="action-description action--god" id="bastet"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Bastet' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/bastet.png" alt="">
                </div>
                <h2 class="action__headline">BASTET - GOD ACTION</h2>
            </div>

            <BastetDescription />
        </div>
</template>