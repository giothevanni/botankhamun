<script setup lang="ts">
</script>
<template>

    <div class="actions-container">
        
        <div class="action-description is-hidden" id="resourceTiles">
            <h2 class="action__headline">RESOURCE TILES</h2>
            <div class="action__image">
                <img class="resources" src="/resource-action.png" alt="">
            </div>
            <div class="align-left">


                <p>

                    Botankhamun takes the highest-value Pure or Tainted die
                    or corresponding (in color) to the first Resource depicted
                    on the tile.
                </p>
                <p>
                    <strong>If tied for highest value,</strong> Botankhamun takes a die from
                    a section where it has a Statue, if possible. (Otherwise, if
                    none of the dice are located in sections where it has a
                    Statue, it takes a die randomly.)
                </p>
                <p>
                    <strong>If still tied,</strong> Botankhamun takes the one providing the
                    higher-numbered Horus Bonus.
                </p>
                <p>
                    <strong>Note:</strong>
                </p>
                <p>
                    <strong>

                        After taking a die, Botankhamun performs the God
                        Action corresponding to the section from which the
                        die was taken
                    </strong>
                </p>
            </div>
        </div>
        <div class="action-description action--god is-hidden" id="horus">
            <h2 class="action__headline">HORUS - GOD ACTION</h2>
            <div class="action__image">
                <img src="/horus.png" alt="">
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

                    If both Temple Complex Statue spaces are already
                    occupied, Botakhamun scores 3 Victory Points.
                    Botankhamun Horus Bonuses
                    As in a normal 2-player game, Statue bonuses are
                    received when either player — Botankhamun and you —
                    perform the corresponding action. However, while your
                    Horus Bonuses remain unchanged, Botakhamun receives
                    a bonus from the chart below, based on the position of
                    the Horus Bonus tile.
                </p>
            </div>
        </div>

        <div class="action--resources is-hidden">
            <h2>RESOURCE TILE</h2>
            <p>
                Botankhamun takes the highest-value Pure or Tainted die
                corresponding (in color) to the first Resource depicted on the tile.
            </p>
            <p>
                <strong>If tied for highest value,</strong> Botankhamun takes a die from
                a section where it has a Statue, if possible. (Otherwise, if
                none of the dice are located in sections where it has a
                Statue, it takes a die randomly.)
            </p>
        </div>

    </div>


</template>

<style>
    .is-hidden {
        display: none;
    }

    .align-left {
        text-align: left;
    }

    .action__image img {
        max-width: 100px;
    }

    .action__image img.resources {
        max-width: 300px;
    }

    .action__headline {
        color: #53401f;
    }
</style>