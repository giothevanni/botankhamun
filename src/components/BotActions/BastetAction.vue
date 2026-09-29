<script setup lang="ts">
    import { store } from '../../store.js';
</script>

<template>
    <div class="action-description action--god" id="bastet"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Bastet' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/bastet.png" alt="">
                </div>
                <h2 class="action__headline">BASTET - GOD ACTION</h2>
            </div>

            <div class="align-left">

                <p>                
                    Botankhamun advances its Happiness marker as normal.
                    If performing this action with a die value of 1-4, it also
                    receives Scribes as normal.
                </p>
                <p>
                    Botankhamun advances the Happiness marker one step at a time.
                </p>
                <p>
                    <strong>If at any point the Happiness marker would advance
                    beyond the Population marker,</strong> Botankhamun
                    advances the Population marker instead.
                </p>
                <p>
                    <strong>Note:</strong>
                    <em>
                        Botankhamun ignores all rewards printed on the Populace track.
                    </em>
                </p>
            </div>
        </div>
</template>