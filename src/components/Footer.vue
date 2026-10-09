<script setup lang="ts">

import { store } from '../store.js';


</script>

<style>
    .footer {
      box-sizing: border-box;
      display: flex;
      gap: 15px;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 0;
      padding: 10px;
      width: 100%;
      background-color: #b94c48;
      box-shadow: 0px -2px 10px rgba(50,50,50,0.7);
      border-top: 2px solid #d87f7c;
      left: 0;
      z-index: 100;

    }

  .footer button {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #4a3618;
      background: linear-gradient(#f7edd3, #e6d3a3);
      border: 2px solid #c9a24a;
      border-radius: 6px;
      padding: 10px 18px;
      min-height: 44px; /* comfortable tap target on mobile */
      width: 170px;
      cursor: pointer;
      box-shadow: 0 2px 0 #8a6a25, 0 3px 6px rgba(0, 0, 0, 0.3);
      transition: transform 0.1s, box-shadow 0.1s, filter 0.15s;
    }

    .footer button:hover {
      filter: brightness(1.06);
    }

    .footer button:active {
      transform: translateY(2px);
      box-shadow: 0 0 0 #8a6a25, 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    .footer button:focus-visible {
      outline: 3px solid #3a9ab5; /* matches your teal highlight on the active card */
      outline-offset: 2px;
    }

    /* Optional: make "Take turn" the primary action */
    .footer button.primary {
      color: #fff8e6;
      background: linear-gradient(#d8b04c, #b88a2a);
      border-color: #7a5a17;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
    }
</style>

<template>
    <div class="footer">

      <button v-if="store.showStartGameButton()" type="button" class="counter" @click="store.startGame()">
        Start Game
      </button>
      <button v-if="store.showNewGameButton()" type="button" class="counter" @click="store.resetGame()">
        New Game
      </button>
      <button 
        v-if="store.turnNumber < 16 && store.screen === store.GAME_SCREEN && store.showMaatButton() === false"
        type="button" class="counter" @click="store.takeTurn()">
        Take turn
      </button>
      <button 
        v-if="store.showMaatButton()"
        type="button" class="counter" @click="store.showMaatScreen()">
        Maat phase
      </button>
      <button 
        v-if="store.showContinueButton()"
        type="button" class="counter" @click="store.showGameScreen()">
        Continue
      </button>
      <button 
        v-if="store.showScoringButton()"
        type="button" class="counter" @click="store.showScoringScreen()">
        Scoring
      </button>
  </div>

</template>