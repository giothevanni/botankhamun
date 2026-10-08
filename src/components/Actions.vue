<script setup lang="ts">
    // import { store } from '../store.js';
    import BastetAction from './BotActions/BastetAction.vue';
    import HathorAction from './BotActions/HathorAction.vue';
    import HorusAction from './BotActions/HorusAction.vue';
    import OsirisAction from './BotActions/OsirisAction.vue';
    import RaAction from './BotActions/RaAction.vue';
    import ThothAction from './BotActions/ThothAction.vue';
    import ResourceAction from './BotActions/ResourceAction.vue';
</script>
<template>

    <div class="actions-container">
        
 
        <BastetAction />
        <HathorAction />
        <HorusAction />
        <OsirisAction />
        <RaAction />
        <ThothAction />
        <ResourceAction />

    </div>


</template>

<style>


    .actions-container {
        /* width: 320px; */
        /* background: rgba(255, 255, 255, 0.3); */
        /* padding: 10px; */
        font-family: 'Zilla Slab', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 18px;
        color: #000;
        /* border: 2px solid #ceac45; */

        @media (min-width: 700px) {
            width: 640px;
        }

        @media (min-width: 900px) {
            width: 520px;
            height: 65vh;
            overflow-y: scroll;
            padding-top: 15px;
            padding-bottom: 70px;
        }
    }

    .actions-container p {
        line-height: 1.5;
    }

    .action-header {
        display: flex;
        align-items: center;
        /* justify-self: center; */
        margin-bottom: 10px;
    }

    .is-hidden {
        display: none;
    }

    .align-left {
        text-align: left;
    }

    .action__image {
        margin-right: 10px;
    }

    .action__image img {
        max-width: 70px;

    }

    .action__image img.resources {
        max-width: 55px;
        min-height: 55px;
    }

    .action__headline {
        color: #53401f;
    }

    .actions-container ul li {
        margin-bottom: 10px;
    }
</style>