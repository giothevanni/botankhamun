<script setup lang="ts">
    import { store } from '../../store.js';
    import HathorDescription from './GodActions/HathorDescription.vue';
</script>

<template>
    <div class="action-description action--god" id="hathor"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Hathor' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/hathor.png" alt="">
                </div>
                <h2 class="action__headline">HATHOR - GOD ACTION</h2>
            </div>

            <HathorDescription />
        </div>
</template>