import { reactive } from 'vue'

import ActionPyramid from './models/ActionPyramid.ts';

const pyramid = new ActionPyramid();



export const store = reactive({

    SETUP_SCREEN: 'setup',
    GAME_SCREEN: 'game',
    MAAT_SCREEN: 'maat',
    SCORE_SCREEN: 'score',

    maatNumber: 0,
    turnNumber: 1,
    totalTurns: 16,
    pyramid: pyramid,

    screen: 'setup',

    resetGame() {
        this.maatNumber = 0;
        this.turnNumber = 1;
        this.pyramid.reset();

        this.screen = this.SETUP_SCREEN;

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    },


    showMaatScreen() {
        this.screen = this.MAAT_SCREEN;
        this.maatNumber++;

        if (this.maatNumber < 4) { 
            this.takeTurn();
        }
    },

    showGameScreen() {
        this.screen = this.GAME_SCREEN;

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    },

    showScoringScreen() {
        this.screen = this.SCORE_SCREEN;

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);

    },

    showNewGameButton() {
        return this.screen !== this.SETUP_SCREEN;
    },
    showStartGameButton() {
        return this.screen === this.SETUP_SCREEN;
    },
    showScoringButton() {
        return this.screen === this.MAAT_SCREEN && (this.maatNumber === 2 || this.maatNumber === 4);
    },

    showMaatButton() {
        return this.screen === this.GAME_SCREEN && (this.turnNumber === 4 || this.turnNumber === 8 || this.turnNumber === 12 || this.turnNumber === 16);
    },

    showContinueButton() {
        return (this.screen === this.MAAT_SCREEN && (this.maatNumber === 1 || this.maatNumber === 3)) || (this.screen === this.SCORE_SCREEN && this.turnNumber < 16); ;
    },

    startGame() {
        this.screen = this.GAME_SCREEN;
    },

    takeTurn() {
        this.pyramid.navigate();
        
        this.turnNumber++;
        if(this.turnNumber === 5 || this.turnNumber === 9 || this.turnNumber === 13) {
            this.pyramid.reset();
        }

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }
})