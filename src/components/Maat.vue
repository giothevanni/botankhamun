<script setup lang="ts">
    import { store } from '../store.js';
</script>
<style>
    .is-highlited {
        font-weight: bold;
        /* color: #ceac45; */
    }
</style>
<template>

    <section id="center">
        <div class="actions-container maat-phase align-left">
            <h2>
                <span v-if="store.maatNumber === 1">First</span>
                <span v-if="store.maatNumber === 2">Second</span>
                <span v-if="store.maatNumber === 3">Third</span>
                <span v-if="store.maatNumber === 4">Fourth</span>
                Maat Phase
            </h2>
            
            <p>During the Maat phase, Botankhamun has a fixed-value that you must beat in order
                to become first in Turn Order.
            </p>
            
            <ul>
                <li :class="{ 'is-highlited': store.maatNumber === 1 }">First Maat phase: +3</li>
                <li :class="{ 'is-highlited': store.maatNumber === 2 }">Second Maat phase: +2</li>
                <li :class="{ 'is-highlited': store.maatNumber > 2 }">Third and Fourth Maat phase: +1</li>
            </ul>
            
            <p><strong>Botankhamun's Ankh value is aways 4.</strong></p>
            <p>
                <strong>If Botankhamun becomes first in Turn Order, </strong>
                it randomly chooses either Gold or Scribe Destiny card (without receiving the reward).
            </p>
            <p>
                <strong>Otherwise,</strong> you may freely choose any of the four Destiny cards.
            </p>
        </div>
    </section>

</template>