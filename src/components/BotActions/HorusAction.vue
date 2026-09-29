<script setup lang="ts">
    import { store } from '../../store.js';
</script>

<template>
    <div class="action-description action--god" id="horus"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Horus' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/horus.png" alt="">
                </div>
                <h2 class="action__headline">HORUS - GOD ACTION</h2>
            </div>

            <div class="align-left">
                <h3 class="action__headline">
                    Build a Statue in honor of a god:
                </h3>
                <p>                
                    Botahnkhamun's first choice is to build a Statue in honor of 
                    a god (corresponding to the value of the die, as normal).
                </p>
                <h3 class="action__headline">Otherwise:</h3>
                <p>
                    <strong>If the corresponding Statue space is already
                    occupied,</strong> Botankhamun instead builds a Statue for
                    the people. Starting with building above the workshops
                    or quarries, Botankhamun chooses whichever space has
                    the biggest impact on the control of the four districts.
                    <strong>If tied,</strong> pick randomly among them.
                </p>
                <p>

                    <strong>If both workshop and quarry Statue spaces are
                    already occupied or neither space would affect
                    control of the districts,</strong> Botankhamun instead builds
                    a Statue at the Temple Complex, choosing whichever
                    space lines up with more of its Pillars. <strong>If tied,</strong> pick
                    randomly among them. Botankhamun then scores
                    3 Victory Points for each of its Pillars in the same row or
                    column, as normal.
                </p>
                <p>

                    <strong>If both Temple Complex Statue spaces are already
                    occupied,</strong>  Botakhamun scores 3 Victory Points.
                </p>
                <h3>Botankhamun Horus Bonuses</h3>
                <p>
                    
                    As in a normal 2-player game, Statue bonuses are
                    received when either player — Botankhamun and you —
                    perform the corresponding action. However, while your
                    Horus Bonuses remain unchanged, Botakhamun receives
                    a bonus from the chart below, based on the position of
                    the Horus Bonus tile.


                    <table>
                        <tr>
                            <td>One or Two</td>
                            <td>1 Scribe</td>
                        </tr>
                        <tr>
                            <td>Three or Four</td>
                            <td>1 Victory Point</td>
                        </tr>
                        <tr>
                            <td>Five or Six</td>
                            <td>1 Scribe and 1 Victory Point</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
</template>