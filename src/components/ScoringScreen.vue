<script setup lang="ts">
    import { store } from '../store.js';
</script>
<style>
    .list-lower-alpha {
        list-style-type: lower-alpha;
    }

    .inline-triangle {
        max-width: 20px;
        transform: translateY(3px);
    }
</style>
<template>

    <section id="center">
        <div class="actions-container maat-phase align-left">
            <h2>Scoring</h2>
            
            <p>
                Botankhamun scores in the following areas according
                to the normal rules:
            </p>

            <ol>
                <li>
                    <strong>For each of the 4 Resource districts in the
                Osiris action area</strong> (Papyrus, Bread, Limestone, and
                Granite), count how many game pieces (Buildings
                and Statues) each player has. The player with the
                most in that district scores 3 Victory Points. In the
                case of a tie, the tied player with the topmost game
                piece (Building or Statue) wins the tie.
                        
                    <p>
                        <strong>Note:</strong> 
                        <em>
                            Statues count towards <span class="underline">two</span> districts.
                        </em>
                    </p>
                </li>

                <li>
                    <strong>For each player,</strong> score the <strong>Temple Complex</strong> as
                    follows:
                    <br>
                    <ol class="list-lower-alpha margin-top">
                        <li>
                            Each <strong>Building and Statue</strong> around the Temple
                            Complex scores 1 Victory Point.
                        </li>
                        <li>
                            Each <strong>Pillar</strong> within the Temple Complex scores
                            1 Victory Point per Building and Statue (belonging
                            to the player) in the same row and column.
                        </li>
                    </ol>
                </li>
                <li>
                    Each player scores 1/3/6/10/15/21 Victory Points
                    for having built 1/2/3/4/5/6 <strong>Statues</strong>.
                </li>
                <li>
                    Each player scores 3 Victory Points per <img class="inline-triangle" src="/triangle.png" /> their
                    <strong>Happiness marker</strong> has reached.
                    <br>
                    <p>
                        <strong>Note:</strong> 
                        <em>
                            These symbols are not cumulative. Only count the highest number 
                            of <img class="inline-triangle" src="/triangle.png" /> the marker has reached. In other words, a player
                            will score 3/6/9/12/15 Victory Points for reaching or exceeding
                            9/13/16/19/21 <span class="underline">Happiness</span>.

                        </em>
                    </p>
                </li>
                <li>
                    You score 2 Victory Points per Production
                    marker on the topmost (“6”) position of its
                    Production Track.

                    <br><br>
                    Botankhamun does not score any Victory Points based
                    on Production Tracks or the number of Buildings
                    constructed. It also does not pay any Bread during
                    Scoring.
                </li>
                <li>
                    You score the sum of any <strong>Victory Points</strong>
                    visible on the <strong>Building row</strong> of your player board.
                </li>
                <li>
                    Finally, you must pay the sum of all <strong>Bread</strong>
                    amounts visible on the <strong>Building row</strong> of your player
                    board. For each Bread you are unable or unwilling to
                    pay, lose <strong>3 Victory Points.</strong>
                </li>
            </ol>

            <p>
                Additionally Botankhamun scores cards as follows:
            </p>
            
            <ol start="8">
                <li>
                    Each <strong>Blessing</strong> counts as 2 Victory Points and is
                    then <strong>discarded</strong>.
                </li>
                <li>
                    Each <strong>Technology</strong> counts as 2 Victory Points and is
                    then <strong>kept</strong>.
                    <p>
                        <strong>Note:</strong> 
                        <em>
                            In other words, any Technology gained before the first Scoring
                            will be worth a total of 4 Victory Points.
                        </em>
                    </p>
                </li>
            </ol>
            <div v-if="store.turnNumber === 16" class="second-scoring">
                <h2>Only for this final Scoring:</h2>
                <p>
                    Botankhamun scores as normal based on the position of
                    its Maat marker on the Turn Order track.
                </p>

                <p>
                    You now score up to 3 of your Decree cards, but
                    no more than one Decree per type, indicated by a
                    printed symbol on the card.
                </p>
                <p>
                    Special scoring for Botankhamun only:
                </p>
                <ol>
                    <li>
                        Each <strong>Decree</strong> is worth <strong>4 Victory Points.</strong>

                        <p>
                        <strong>Note:</strong> 
                            <em>
                                Botankhamun ignores any symbol restrictions on Decrees.
                            </em>
                        </p>                        
                    </li>
                    <li>
                        Every <strong>two Scribes</strong> are worth <strong>1 Victory Point.</strong>
                    </li>
                </ol>
                <p>
                    For an increased challenge, Botankhamun scores
                    8 Victory Points per Decree instead.
                </p>
            </div>
            
           
        </div>
    </section>
            

</template>

<style>

</style>