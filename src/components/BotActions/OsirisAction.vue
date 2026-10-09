<script setup lang="ts">
    import { store } from '../../store.js';

    import OsirisDescription from './GodActions/OsirisDescription.vue';
</script>

<template>
    <div class="action-description action--god" id="osiris"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Osiris' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/osiris.png" alt="">
                </div>
                <h2 class="action__headline">OSIRIS - GOD ACTION</h2>
            </div>


            <OsirisDescription />
        </div>
</template>