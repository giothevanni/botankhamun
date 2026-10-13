<script setup lang="ts">
    import { store } from '../../../store.js';

    import BlueRedDiceEvaluation from './BlueRedDiceEvaluation.vue';
</script>
<template>
    <div class="align-left">

        <p>                
            Botankhamun raises one Pillar within the Temple
            Complex, choosing the Pillar tile that corresponds to its die value.
            Whithout changing the tile's orientation, Botankhamun places the tile 
            on an empty space within the Temple Complex where it scores most points:
        </p>
        <div class="reminder" v-if="store.settings.isExpansionEnabled">
            If Botankhamun builds a Pillar on top of a Conquest
            tile, it scores <strong>2 additional Victory Points.</strong> These points
            are included when calculating which space is the most
            advantageous for it to build on.
        </div>
        <BlueRedDiceEvaluation />
        <ul>
            <li>It scores 1 Victory Point per building, regardless
                of ownership, in the same row or column.</li>
            
            <li>It scores 1 Victory Point per adjacent edge, regardless
                of color.</li>
            <li>
                It scores 1, 2, or 3 Victory Points based on the
                space from which it took the Pillar Tile.
            </li>
            <li>
                It ignores any reward covered by the Pillar Tile.
            </li>
            <li>
                It ignores any ability printed on the Pillar Tile.
            </li>
        </ul>
        <p>
            <strong>If multiple spaces would score the same amount of Victory Points,</strong> 
            break ties for the space in a row / column with one of its houses.
        </p>
        <p>
            <strong>If still tied,</strong> 
            break ties in favor of a space not adjacent to the Temple Complex's edge.
        </p>
        <p>
            <strong>If any spaces are still tied,</strong> 
            pick randomly among them.
        </p>

    </div>
</template>