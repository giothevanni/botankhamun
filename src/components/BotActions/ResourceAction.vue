<script setup lang="ts">
    import { store } from '../../store.js';
</script>
<template>
    <div class="action-description" id="resourceTiles"
        :class="{ 'is-hidden': store.pyramid.getCurrentTile().type !== 'resource' }"
    >
        <h2 class="action__headline">{{ store.pyramid.getCurrentTile().title.toUpperCase()  }} - RESOURCE ACTION</h2>
        <div class="action__image">
            <img class="resources" src="/resource-action.png" alt="">
        </div>
        <div class="align-left">


            <p>

                Botankhamun takes the highest-value Pure or Tainted 
                <strong v-if="store.pyramid.getCurrentTile().title === 'Bread'">
                    Brown die
                </strong>
                <strong v-if="store.pyramid.getCurrentTile().title === 'Papyrus'">
                    Yellow die
                </strong>
                <strong v-if="store.pyramid.getCurrentTile().title === 'Granite'">
                    Black die
                </strong>
                <strong v-if="store.pyramid.getCurrentTile().title === 'Limestone'">
                    White die
                </strong>
                
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
                <em>
                    If no dice are available in the first Resource's color, proceed to the
                    next Resource on the tile, and so on, until a die is taken.
                </em>
            </p>
            <p>
                <strong>Note:</strong>
                <em>
                    In the extremely unlikely scenario of only grey dice being available, Botankhamun
                    takes the highest-value grey die available, breaking ties as normal.
                </em>
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
</template>