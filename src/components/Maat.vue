<script setup lang="ts">
    import { ref } from 'vue';
    import { store } from '../store.js';

    const coinFlip = ref(Math.round(Math.random() * 100) % 2); // Simulate a coin flip

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
            <p class="reminder">
                <strong>If Botankhamun becomes first in Turn Order, </strong>

                <span v-if="coinFlip === 1">
                    this time  it will choose the <strong>Gold Destiny card</strong> (without receiving the reward).
                </span>
                <span v-else>
                    this time  it will choose the <strong>Scribe Destiny card</strong> (without receiving the reward).
                </span>
            </p>
            <p>
                <strong>Otherwise,</strong> you may freely choose any of the four Destiny cards.
            </p>
        </div>
    </section>

</template>