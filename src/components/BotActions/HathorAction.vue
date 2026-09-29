<script setup lang="ts">
    import { store } from '../../store.js';
</script>

<template>
    <div class="action-description action--god" id="hathor"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Hathor' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/hathor.png" alt="">
                </div>
                <h2 class="action__headline">HATHOR - GOD ACTION</h2>
            </div>

            <div class="align-left">
                <p>
                    Botankhamun constructs a Building around the Temple
                    Complex, scoring Victory Points and advancing its
                    Population marker as normal.
                </p>
                <p>
                    <strong>Note:</strong>
                    <em>
                        Botankhamun does not gain any Resources or Faith tokens.
                    </em>
                </p>
                <p>
                    Botankhamun chooses the space where it scores the most
                    immediate Victory Points from its Pillars.
                </p>
                <p>
                    <strong>If tied,</strong> pick randomly among them.
                </p>
            </div>
        </div>
</template>