<script setup lang="ts">
    import { ref } from 'vue';

    const coinFlip = ref(Math.round(Math.random() * 100) % 2); // Simulate a coin flip

</script>
<style>

    .setup__die {
        max-width: 30px;
        transform: translateY(7px);
    }

    .setup__horus-action {
        max-width: 46px;
        transform: translateY(4px);
        margin: 0 5px;
    }

    .u-spacer {
        height: 20px;
    }

    .u-margin-top-small {
        margin-top: 10px;
    }

    .list-no-padding {
        padding-left: 0;
    }

    .list-padding-small {
        padding-left: 20px;
    }

    .game-setup {
        @media screen and (min-width: 760px) {
            width: 80vw;
            margin: 0 auto;
        }

        @media screen and (min-width: 900px) {
            height: 69vh;
            overflow-y: scroll;
        }
    }
</style>
<template>

    <div id="center">
        <div class="game-setup align-left">
            <h2>
                Game Setup
            </h2>
            <p>

                Set up the game as you would for 2 players — Botankhamun and you, each using their own player
                pieces — with the following changes:
            </p>

            <ol start="9">
                <li>

                    Botankhamun does not use a player board.

                    <ul class="list-padding-small u-margin-top-small">
                        <li>
                            Return its Production markers to the game box, as they will not be needed.
                        </li>
                        <li>
                            Keep its Buildings, Statues, and Pillars nearby.
                        </li>
                        <li>
                            Botankhamun begins the game with 7 Population and 4 Happiness
                        </li>
                    </ul>
                </li>
            </ol>
            <ol start="11">
                <li>
                    Botankhamun does not get a Decree.
                </li>
                <li>
                    Shuffle and randomly select 3 Starting cards. From these, choose 2 Starting cards for yourself.

                    <ul class="list-padding-small u-margin-top-small">
                        <li>
                            Botankhamun does not use Starting cards or
                            receive any starting Resources.
                        </li>
                        <li>
                            Botankhamun always starts the game first in Turn Order.
                        </li>
                        <li>
                            Botankhamun chooses 
                            <span v-if="coinFlip === 1">the <strong>Gold Destiny card</strong></span>
                            <span v-else>the <strong>Scribe Destiny card</strong></span>
                            (without receiving the reward).
                        </li>
                    </ul>
                </li>
            </ol>
            <div class="u-spacer"></div>
            <h2>ADDITIONAL SETUP</h2>
            <ul class="list-padding-small">
                <li>
                    Place one of Botankhamun's Statues, as if built in honor of a god into the section
                    matching a Horus <img class="setup__horus-action" src="/horus-one.png" alt=""> action.
                </li>
            </ul>

            <div class="u-spacer"></div>

            <h2>ADJUSTING THE DIFFICULTY</h2>
            <p>
                The steps above represent the setup for an <strong>easy</strong> challenge. 
                However, you can increase the difficulty following the steps below:
            </p>

            <ul class="list-padding-small u-margin-top-small">
                <li>
                    <strong>For medium difficulty, Botankhamun begins the game with all the following:</strong>


                    <ul class="list-padding-small u-margin-top-small">
                        <li>
                            a Building on the <img class="setup__die" src="/die-five.png" alt=""> Bread workshop space,
                        </li>
                        <li>
                            a Building on the <img class="setup__die" src="/die-five.png" alt=""> Granite quarry space, and
                        </li>
                        <li>
                            a Pillar on the central space of the Temple Complex.
                            (Draw a random Pillar tile from the top of the stack as its foundation.)
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>

                        For hard difficulty, in addition to the benefits associated with medium difficulty (above),
                        Botankhamun begins the game with the following:
                    </strong>


                    <ul class="list-padding-small u-margin-top-small">
                        <li>
                            a Statue built in honor of a god in the section matching a Horus <img class="setup__horus-action" src="/horus-four.png" alt=""> action.
                        </li>
                    </ul>
                </li>
            </ul>

            <p>
                <strong>Note:</strong>
                <em>
                    As an additional challenge, regardless of difficulty, try starting the game with 
                    2 randomly drawn Starting cards instead of picking 2 from 3.

                </em>
            </p>
        </div>
    </div>


</template>

<style>

</style>