<script setup lang="ts">
    import { store } from '../../store.js';
</script>
<style>
    .reminder {
        background-color: #f0f0f0;
        border-left: 4px solid #b94c48;
        padding: 10px;
        margin: 15px 0;
    }
</style>
<template>
    <div class="action-description align-left" id="resourceTiles"
        :class="{ 'is-hidden': store.pyramid.getCurrentTile().type !== 'resource' }"
    >
       
        <div class="action-header">
                <div class="action__image">
                    <img class="resources" v-if="store.pyramid.getCurrentTile().title === 'Bread'" src="/die-brown.png" alt="" />
                    <img class="resources" v-if="store.pyramid.getCurrentTile().title === 'Papyrus'" src="/die-yellow.png" alt="" />
                    <img class="resources" v-if="store.pyramid.getCurrentTile().title === 'Granite'" src="/die-black.png" alt="" />
                    <img class="resources"v-if="store.pyramid.getCurrentTile().title === 'Limestone'" src="/die-white.png" alt="" />
                </div>
                <h2 class="action__headline">{{ store.pyramid.getCurrentTile().title.toUpperCase()  }} - RESOURCE ACTION</h2>
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
            <div class="reminder">
                <strong>Remember:
                </strong>
                    After taking a die, Botankhamun performs the God
                    Action corresponding to the section from which the
                    die was taken
            </div>
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
        </div>
    </div>
</template>