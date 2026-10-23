<script lang="ts" setup >
    import { ref } from 'vue';
    import { CCollapse } from '@coreui/vue';
    import GodsAccordion from './BotActions/GodsAccordion.vue';

    const visible = ref(false);
</script>

<style>
    .god-actions-reminder {
        margin-top: 10px;
    }
</style>

<template>
    <div class="reminder align-left">
        <strong>Reminder:</strong>
        If there aren't any remaining <em>Pure</em> or <em>Tainted</em> dice in this god's section, move <strong>counter-clockwise</strong> to the next section with an available <em>Pure</em> or <em>Tainted</em> die. <a href="#" @click.prevent="visible = !visible"><strong><span v-if="!visible">Show</span><span v-else>Hide</span> all god actions</strong></a>

        <CCollapse :visible="visible">
            <div class="god-actions-reminder">
                <GodsAccordion />
            </div>
        </CCollapse>
    </div>
</template>