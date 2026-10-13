<script setup lang="ts">
    import { ref } from 'vue';
    import { store } from '../store.js';
    import { CFormSwitch } from '@coreui/vue'
    import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue';

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

    ol {
        padding-left: 30px;
    }
</style>
<template>

    <div id="center">
        <div class="game-setup align-left">
            <h2>
                Game Setup
            </h2>
            <p>
                
                <CFormSwitch 
                    id="expansionSettings" 
                    v-model="store.settings.isExpansionEnabled"
                    size="xl" 
                    label="Use the 'Time of Seth' expansion" 
                />

            </p>
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
                <li v-if="store.settings.isExpansionEnabled">
                    <p>
                        Choose between drawing either 3 random Starting cards
                        and 1 random Cultist Power; or drawing 2 random
                        Starting cards and 2 random Cultist Powers. From these,
                        choose 2 Starting cards and 1 Cultist Power for yourself.
                        For more control in the matter, draw 3 Starting cards and
                        2 Cultist Powers to pick from.
                    </p>
                    <p>
                        Randomly select 3 Artifacts. Return the rest of
                        the Artifacts to the box. You may increase or decrease
                        the difficulty level by selecting one fewer or one more
                        Artifact instead. For rules concerning picking Destiny
                        cards during setup, see Selecting Destiny cards and
                        Artifacts further in the rules.
                    </p>
                </li>
                <li v-else>
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

            <div v-if="store.settings.isExpansionEnabled">
                <ul>
                    <li>
                        <strong>For medium difficulty, </strong>

                        Botankhamun begins the game with a Building in a randomly selected region on
                        the Seth board (it does not receive the reward). Roll a die
                        to determine the region.
                    </li>    

                    <li>
                        <strong>For hard difficulty,</strong> in addition to the benefits associated
                        with medium difficulty (above), Botankhamun begins
                        the game with one more Building in a randomly selected
                        region on the Seth board (ignoring the reward as well).
                        Roll a die to determine the region, remembering all
                        the restrictions.    
                    </li>
                    <li>
                        Once you have tried out the expansion, consider adding
                        a second set of Buildings (of a different color) to
                        Botankhamun’s supply (essentially giving it up to 20
                        Buildings to construct). This will make Botankhamun’s
                        score more “even”, but sometimes a little higher.    
                    </li>
                    <li>
                        All difficulty adjustments (additional Buildings in
                        the Osiris area, additional Pillar within the Temple
                        Complex and an additional Statue) listed in the base game
                        rules can still be applied.
                        
                        <div class="u-margin-top-small"></div>

                        <CAccordion>
                            <CAccordionItem :item-key="1">
                                <CAccordionHeader>
                                    <img class="accordion_god-image" src="/osiris2.png"/> Osiris area buildings    
                                </CAccordionHeader>
                                <CAccordionBody>
                                    <ul class="list-padding-small u-margin-top-small">
                                        <li>
                                            a Building on the <img class="setup__die" src="/die-five.png" alt=""> Bread workshop space,
                                        </li>
                                        <li>
                                            a Building on the <img class="setup__die" src="/die-five.png" alt=""> Granite quarry space, and
                                        </li>
                                    </ul>                            
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem :item-key="2">
                                <CAccordionHeader><img class="accordion_god-image" src="/ra2.png"/> Temple complex buildings</CAccordionHeader>
                                <CAccordionBody>
                                    a Pillar on the central space of the Temple Complex.
                                    (Draw a random Pillar tile from the top of the stack as its foundation.)                            
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                    </li>
                </ul>
            </div>
            <div v-else>
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
    </div>


</template>

<style>

</style>