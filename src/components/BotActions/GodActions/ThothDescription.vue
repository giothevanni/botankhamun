<script setup lang="ts">
    import BlueRedDiceEvaluation from './BlueRedDiceEvaluation.vue';
</script>
<template>

    <div class="align-left">
        <p>
            Botankhamun takes 1, 2, or 3 cards, according to the
            value of the die taken.
        </p>
        <BlueRedDiceEvaluation />
        <p>
            Botankhamun takes cards in the following priority:
            Decrees > Technologies > Blessings. It selects cards
            from the highest segment possible.
        </p>
        <p>
            <strong>If multiple cards exist of the same type,</strong> Botankhamun
            takes the leftmost card (whithin the segment) first.
        </p>
        <p>
            <strong>Note:</strong>
            <em>
                Botankhamun ignores the effects of all cards and keeps them all in a pile in its player area.
            </em>
        </p>
    </div>
</template>