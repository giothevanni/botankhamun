import { reactive } from 'vue'

import ActionPyramid from './models/ActionPyramid.ts';

const pyramid = new ActionPyramid();

export const store = reactive({
    turnNumber: 1,
    totalTurns: 16,
    pyramid: pyramid,

    showMaatReminder() {
        return this.turnNumber === 4 || this.turnNumber === 8 || this.turnNumber === 12;
    },
    resetGame() {
        this.turnNumber = 1;
        this.pyramid.reset();

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    },
    takeTurn() {
        this.pyramid.navigate();
        
        this.turnNumber++;
        if(this.turnNumber === 5 || this.turnNumber === 9 || this.turnNumber === 13) {
            console.log("Maat Reminder!");
            this.pyramid.reset();
        }

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }
})