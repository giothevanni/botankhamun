<script setup lang="ts">

    import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue';
    import { store } from '../../store.js';

    import BastetDescription from './GodActions/BastetDescription.vue';
    import HathorDescription from './GodActions/HathorDescription.vue';
    import HorusDescription from './GodActions/HorusDescription.vue';
    import OsirisDescription from './GodActions/OsirisDescription.vue';
    import RaDescription from './GodActions/RaDescription.vue';
    import ThothDescription from './GodActions/ThothDescription.vue';
</script>
<style>
    .reminder {
        background-color: #f0f0f0;
        border-left: 4px solid #b94c48;
        padding: 10px;
        margin: 15px 0;
    }

    .accordion_god-image {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
</style>
<template>
    <div class="action-description align-left" id="resourceTiles"
        v-if="store.pyramid.getCurrentTile().type === 'resource'"
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
                <p>

                    <strong>Remember:</strong>
                    After taking a die, Botankhamun performs the God
                    Action corresponding to the section from which the
                    die was taken
                </p>            
                <CAccordion>
                    <CAccordionItem :item-key="1">
                        <CAccordionHeader><img class="accordion_god-image" src="/horus2.png"/> Horus </CAccordionHeader>
                        <CAccordionBody>
                            <HorusDescription />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem :item-key="2">
                        <CAccordionHeader><img class="accordion_god-image" src="/ra2.png"/>  Ra </CAccordionHeader>
                        <CAccordionBody>
                            <RaDescription />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem :item-key="3">
                        <CAccordionHeader><img class="accordion_god-image" src="/hathor2.png"/> Hathor </CAccordionHeader>
                        <CAccordionBody>
                            <HathorDescription />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem :item-key="4">
                        <CAccordionHeader><img class="accordion_god-image" src="/bastet2.png"/> Bastet </CAccordionHeader>
                        <CAccordionBody>
                            <BastetDescription />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem :item-key="5">
                        <CAccordionHeader><img class="accordion_god-image" src="/thoth2.png"/> Thoth </CAccordionHeader>
                        <CAccordionBody>
                            <ThothDescription />
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem :item-key="6">
                        <CAccordionHeader><img class="accordion_god-image" src="/osiris2.png"/> Osiris </CAccordionHeader>
                        <CAccordionBody>
                            <OsirisDescription />
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
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