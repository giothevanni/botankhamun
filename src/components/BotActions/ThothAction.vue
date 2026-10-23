<script setup lang="ts">
    import { store } from '../../store.js';
    
    import NoDiceReminder from '../NoDiceReminder.vue';
    import ThothDescription from './GodActions/ThothDescription.vue';
</script>

<template>
    <div class="action-description action--god" id="thoth"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Thoth' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/thoth.png" alt="">
                </div>
                <h2 class="action__headline">THOTH - GOD ACTION</h2>
            </div>

            <NoDiceReminder />
            <ThothDescription />
        </div>
</template>