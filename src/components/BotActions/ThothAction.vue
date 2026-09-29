<script setup lang="ts">
    import { store } from '../../store.js';
</script>

<template>
    <div class="action-description action--god" id="thoth"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Thoth' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/thoth.png" alt="">
                </div>
                <h2 class="action__headline">THOTH - GOD ACTION</h2>
            </div>

            <div class="align-left">
                <p>
                    Botankhamun takes 1, 2, or 3 cards, according to the
                    value of the die taken.
                </p>
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
        </div>
</template>