<script setup lang="ts">
    import { store } from '../../store.js';
</script>

<template>
    <div class="action-description action--god" id="ra"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Ra' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/ra.png" alt="">
                </div>
                <h2 class="action__headline">RA - GOD ACTION</h2>
            </div>


            <div class="align-left">
                <p>                
                    Botankhamun raises one Pillar within the Temple
                    Complex, choosing the Pillar tile that corresponds to its die value.
                    Whithout changing the tile's orientation, Botankhamun places the tile 
                    on an empty space within the Temple Complex where it scores most points:
                </p>

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
        </div>
</template>