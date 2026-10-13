<script setup lang="ts">
    import { store } from '../../../store.js';
</script>
<template>
    <p class="reminder" v-if="store.settings.isExpansionEnabled">
        For purposes of determining the highest die
        Botankhamun takes, <strong class="label-red-die">red</strong> and <strong class="label-blue-die">blue</strong> dice are considered
        one value higher, and to be prioritized over other Tainted die if tied for highest value after applying the modifier.
    </p>
</template>