import { reactive } from 'vue'

import ActionPyramid from './models/ActionPyramid.ts';

const pyramid = new ActionPyramid();

export const store = reactive({
    turnNumber: 1,
    pyramid: pyramid,

    takeTurn() {
        this.pyramid.navigate();
    }
})