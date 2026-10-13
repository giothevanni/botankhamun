<script setup lang="ts">

    import { ref } from 'vue';
    import { store } from '../../store.js';

    import GodsAccordion from './GodsAccordion.vue';

    const coinFlip = ref(Math.round(Math.random() * 100) % 2); // Simulate a coin flip
</script>
<template>
    <div class="action-description align-left" id="priestsAndSoldiers"
        v-if="store.pyramid.getCurrentTile().type === 'expansion'"
    >
       
        <div class="action-header">
                <h2 class="action__headline">PRIESTS AND SOLDIERS TILE</h2>
            </div>
        <div class="align-left">

            <p>
                Botankhamun takes the highest-value <strong class="label-red-die">red</strong> or <strong class="label-blue-die">blue</strong> die.
                If there are no red or blue die available,
                it takes the <strong>highest Pure die</strong> instead. 
            </p>

            <div class="reminder">
                <p>

                    <strong>Remember:</strong>
                    After taking a die, Botankhamun performs the God
                    Action corresponding to the section from which the
                    die was taken
                </p>            
                <GodsAccordion />
            </div>
            <p>
                <strong>If tied for highest value,</strong> Botankhamun takes a die from
                a section where it has a Statue, if possible. (Otherwise, if
                none of the dice are located in sections where it has a
                Statue, it takes a <strong v-if="coinFlip === 1">blue die</strong><strong v-else>red die</strong>.)
            </p>

            <p>
                <strong>If still tied,</strong> Botankhamun takes the one providing the
                higher-numbered Horus Bonus.
            </p>
            <p>
                <strong>Note:</strong>
                <em>
                    In the extremely unlikely scenario of only grey dice being available, Botankhamun
                    takes the highest-value grey die available, breaking ties as normal.
                </em>
            </p>
        </div>
    </div>
</template>