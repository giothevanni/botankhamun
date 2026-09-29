<script setup lang="ts">
    import { store } from '../../store.js';
</script>

<template>
    <div class="action-description action--god" id="osiris"
            :class="{ 'is-hidden': store.pyramid.getCurrentTile().title !== 'Osiris' }"
        >
            <div class="action-header">
                <div class="action__image">
                    <img src="/osiris.png" alt="">
                </div>
                <h2 class="action__headline">OSIRIS - GOD ACTION</h2>
            </div>


            <div class="align-left">
                <p>                
                    Botankhamun constructs one Building but does not
                    suffer any decrease in Happiness for doing so.
                </p>
                <p>
                    The <strong>value</strong> of the die determines the <strong>row</strong>, as normal,
                    while the <strong>color</strong> of the die determines the <strong>role</strong> of the
                    Building:

                    <ul>
                        <li>Yellow = Papyrus workshop</li>
                        <li>Brown = Bread workshop</li>
                        <li>White = Limestone quarry</li>
                        <li>Black = Granite quarry</li>
                        <li>
                            Gray = Botankhamun will choose the district that   
                            contains the fewest Buildings. (If tied for fewest, it
                            chooses the leftmost district.)

                        </li>
                    </ul>
                </p>
                <p>
                    <strong>If the space is already occupied,</strong> Botankhamun places
                    the Building in the next space to the right, looping around if necessary.
                    (Papyrus -> Bread -> Limestone -> Granite -> Papyrus ...)
                </p>
                <p>
                    <strong>If all spaces along that whole row are already occupied,</strong> 
                    Botankhamun places the Building in the row above, looping around if necessary 
                    (6-> 5 -> 4 -> 3 -> 2 -> 1 -> 6 ...). In other words, if the desired space
                    in the new row is already occupied, follow the procedure above, continuing 
                    to higher rows if needed.
                </p>
                <p>
                    <strong>Note:</strong>
                    <em>
                        Botankhamun ignores all Resource and Production increases.
                    </em>
                </p>

            </div>
        </div>
</template>