<script setup lang="ts">
    import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue';

    import { store } from '../../store.js';

    import BastetDescription from './GodActions/BastetDescription.vue';
    import HathorDescription from './GodActions/HathorDescription.vue';
    import HorusDescription from './GodActions/HorusDescription.vue';
    import OsirisDescription from './GodActions/OsirisDescription.vue';
    import RaDescription from './GodActions/RaDescription.vue';
    import ThothDescription from './GodActions/ThothDescription.vue';
    import SethDescription from './GodActions/SethDescription.vue';
</script>

<template>
    <div>

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
            <CAccordionItem :item-key="7" v-if="store.settings.isExpansionEnabled === true">
                <CAccordionHeader><img class="accordion_god-image" src="/seth.png"/> Seth </CAccordionHeader>
                <CAccordionBody>
                    <SethDescription />
                </CAccordionBody>
            </CAccordionItem>
        </CAccordion>
    </div>
</template>